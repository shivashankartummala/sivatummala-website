# USAGE: Universal Substrate for Agent Governance Enforcement

## Abstract

USAGE is an open, platform-agnostic standard interface specification that defines the execution boundary between autonomous agent processes ("The Brain") and their underlying host execution environments ("The Substrate"). 

Just as POSIX standardized the kernel-application boundary for traditional operating systems, USAGE standardizes the cognitive-infrastructure boundary for autonomous AI agents. USAGE enables secure, reproducible, and interoperable agent execution across heterogeneous platforms by providing formal protocols for process lifecycle management, memory virtualization, capability gating, and system signal handling.

This specification defines the **Agent Substrate Interface (ASI)**, a gRPC-native protocol stack that allows agents to reason, act, and persist state independent of their execution platform while maintaining strict security and resource governance.

---

## The 4-Layer Protocol Stack

USAGE organizes autonomous agent execution into four distinct layers, each with clearly defined responsibilities and interfaces:

### Layer 4: Cognitive Application
The autonomous agent itself—the LLM-based decision engine, planning logic, and domain-specific reasoning. This layer is substrate-agnostic; it issues high-level semantic intentions ("invoke tool X", "persist memory", "yield for reflection") without concern for the underlying infrastructure.

**Responsibility:** Agent logic, model inference, decision-making, goal-directed reasoning.

### Layer 3: Governance & Aspect
The policy enforcement layer. This layer interprets the agent's intentions within the bounds of defined security policies, capability constraints, tool allowlists, and resource quotas. It acts as a mediator between the agent's desires and the substrate's capabilities.

**Responsibility:** Authorization gating, tool allowlist validation, capability enforcement, quota tracking, audit logging.

### Layer 2: Runtime & Execution
The process management and state serialization layer. This layer manages the agent's execution context, handles state snapshots during `UsageYield` calls, manages virtual memory paging between L1 context windows and L2/L3 storage, and enforces state machine invariants (Pending → Active → Thinking → Paused → Terminated).

**Responsibility:** Process lifecycle, state serialization, context management, memory tier abstraction, signal delivery.

### Layer 1: Substrate Abstraction
The underlying execution environment—cloud infrastructure (Kubernetes, AWS Lambda, Azure Container Instances), local compute, edge devices, or hybrid deployments. This layer presents a unified interface for process spawning, capability enforcement, storage access, and tool execution, abstracting away platform-specific details.

**Responsibility:** Process spawning, capability binding, tool execution, storage layer, signal delivery to the OS.

---

## The POSIX Analogy

In traditional systems, **POSIX** standardized how applications interact with kernels:

| Concept | POSIX | USAGE |
|---------|-------|-------|
| **Boundary** | Kernel ↔ Userspace | Substrate ↔ Agent Cognitive Process |
| **Process Management** | `fork()`, `exec()`, `exit()` | `UsageSpawn()`, `UsageYield()`, `UsageSignal()` |
| **Memory Model** | Virtual memory, paging | Context windows, L2/L3 memory tiers, token budgets |
| **Signals** | `SIGTERM`, `SIGSTOP`, `SIGINT` | `SIG_AGENT_TERMINATE`, `SIG_AGENT_PAUSE`, `SIG_AGENT_INTERRUPT` |
| **System Calls** | `read()`, `write()`, `open()` | `UsageCallTool()`, custom domain-specific syscalls |
| **Portability** | Applications run on any POSIX-compliant OS | Agents run on any USAGE-compliant substrate |
| **Standardization Goal** | Decouple application from kernel | Decouple agent cognition from execution infrastructure |

Just as POSIX freed application developers from OS-specific implementation details, **USAGE frees AI engineers from infrastructure-specific agent designs**. An agent written to the USAGE specification should execute identically whether running on Kubernetes, serverless platforms, local hardware, or future substrates that haven't yet been imagined.

---

## Core Concepts

### Agent Substrate Interface (ASI)
The gRPC-native protocol that defines all communication between agent processes and their substrate. ASI is implemented via the `UsageSubstrateCore` service, which exposes five primary RPC methods:

- **`UsageSpawn()`**: Initialize a new agent process with specified capabilities and resource quotas.
- **`UsageYield()`**: Serialize agent state and yield control back to the substrate for memory management, reflection, or governance checkpoints.
- **`UsageSignal()`**: Send control signals to the agent (terminate, pause, interrupt).
- **`UsageMemPageOut()`**: Trigger memory virtualization, moving token context from L1 (hot) to L2 (warm) or L3 (cold) storage.
- **`UsageCallTool()`**: Invoke external tools (APIs, databases, search engines) within the governance boundary.

### State Machine
All USAGE-compliant agents operate within a well-defined state machine with five phases:

1. **Pending**: The agent process has been spawned but not yet activated with an identity boundary.
2. **Active**: The agent has established identity context and is ready to reason.
3. **Thinking**: The agent is actively engaged in inference or planning.
4. **Paused**: The agent has yielded control and is awaiting substrate action (e.g., tool result, signal).
5. **Terminated**: The agent process has concluded and released all resources.

Illegal transitions (e.g., Pending → Thinking without an Active phase) trigger substrate-level enforcement failures.

### Memory Virtualization
USAGE defines a three-tier memory model:

- **L1 Context Window**: Hot, in-process memory. The current token context available to the agent's cognitive process. Limited by model context window (e.g., 8K, 100K, 200K tokens).
- **L2 Warm Cache**: Warm storage tier (local SSD, Redis, etc.). Token context that has been paged out but can be retrieved within reasonable latency for the current reasoning episode.
- **L3 Cold Storage**: Cold storage tier (S3, GCS, persistent blob stores). Historical token context, memory artifacts, and long-term learning state. Accessed rarely, incurs high latency.

The `UsageMemPageOut()` RPC enables the agent to explicitly request memory tier transitions, triggering automatic serialization and addressing.

### Capability Model
USAGE enforces a capability-based security model where agents are granted explicit, enumerated capabilities at spawn time. Attempting to invoke a tool outside the granted capability set triggers substrate-level denial. This model enables fine-grained resource governance without runtime permission negotiation.

---

## Repository Layout Map

```
usage-spec/
├── README.md                            # This file
├── LICENSE                              # Apache 2.0 or equivalent
│
├── spec/
│   ├── usage-core.md                    # Core architectural specification
│   ├── asi-system-calls.md              # Detailed ASI method semantics
│   ├── governance-model.md              # Capability, quota, and policy enforcement
│   ├── memory-model.md                  # Memory virtualization and tier management
│   ├── security-model.md                # Security boundaries and threat model
│   └── runtime-state-machine.md         # State diagram and transition rules
│
├── proto/
│   └── usage/
│       └── v1/
│           ├── asi.proto                # gRPC service definitions
│           ├── messages.proto           # Common message types
│           └── types.proto              # Enumerations and shared types
│
├── schemas/
│   ├── agent_manifest.schema.json       # JSON Schema for AgentManifest.yaml
│   ├── capability.schema.json           # Capability specification schema
│   └── policy.schema.json               # Governance policy schema
│
├── examples/
│   ├── agent_manifest_basic.yaml        # Minimal agent configuration
│   ├── agent_manifest_advanced.yaml     # Advanced agent with full features
│   ├── capability_set_default.yaml      # Default capability grant set
│   └── policy_governance_strict.yaml    # Example strict governance policy
│
├── compliance-tests/
│   ├── asi_compliance_suite.md          # Compliance test requirements
│   ├── state_machine_tests.md           # State transition validation tests
│   ├── memory_virtualization_tests.md   # Memory tier paging tests
│   └── tool_invocation_tests.md         # Tool execution boundary tests
│
└── RFC/
    ├── rfc-001-lifecycle.md             # Process lifecycle state machine (APPROVED)
    ├── rfc-002-memory-tiers.md          # Memory virtualization design
    ├── rfc-003-governance-model.md      # Capability and quota enforcement
    └── rfc-004-substrate-binding.md     # Substrate implementation guide
```

---

## Quick Start

### For Agent Developers
1. Read `spec/usage-core.md` to understand the USAGE architecture.
2. Review `examples/agent_manifest_basic.yaml` for minimal agent configuration.
3. Implement your agent to target the `UsageSubstrateCore` gRPC service.
4. Validate your agent manifest against `schemas/agent_manifest.schema.json`.

### For Substrate Implementers
1. Read `spec/asi-system-calls.md` for detailed method semantics.
2. Implement the `UsageSubstrateCore` gRPC service defined in `proto/usage/v1/asi.proto`.
3. Ensure your substrate passes all compliance tests in `compliance-tests/`.
4. Review `RFC/rfc-001-lifecycle.md` for state machine invariant enforcement.

### For Security & Policy Engineers
1. Review `spec/governance-model.md` for capability and quota models.
2. Use `schemas/policy.schema.json` to define governance policies.
3. Reference `RFC/rfc-003-governance-model.md` for authorization patterns.

---

## Key Principles

1. **Platform Agnosticism**: USAGE specifies boundaries, not implementations. Substrates may be Kubernetes, serverless, local, or heterogeneous—USAGE abstracts these differences.

2. **Security by Default**: Agents operate within capability boundaries. Permission is explicit; denial is the default.

3. **State Reproducibility**: Agents can serialize their full reasoning state via `UsageYield()`. This enables checkpointing, replay, and formal verification.

4. **Formal Semantics**: All state transitions and method behaviors are formally defined. Substrate implementations can be mechanically verified against the specification.

5. **Extensibility**: USAGE v1 defines core behaviors. Future versions add domain-specific syscalls while maintaining backward compatibility.

---

## Specification Status

**Version:** 1.0.0-DRAFT  
**Last Updated:** 2026-05-15  
**Status:** Community Review  
**Maintainers:** [Maintainer List]

This specification is open for community feedback. Proposed changes should be submitted as issues or pull requests with clear rationale.

---

## License

This specification and all accompanying documentation, protocol definitions, and schemas are released under the **Apache License 2.0**. See `LICENSE` for details.

---

## Contributing

Contributions to the USAGE specification are welcome. Please follow these guidelines:

1. **Architectural Changes**: Submit as RFC (Request for Comments) in the `RFC/` directory.
2. **Bug Fixes**: File issues or submit PRs against the affected spec file.
3. **Implementation Feedback**: Reference your substrate implementation and specific challenges.
4. **Compliance Gaps**: Document gaps between the specification and your implementation.

All contributions must maintain backward compatibility with USAGE v1.0 unless explicitly versioning a breaking change.

---

## Related Standards & Projects

- **POSIX**: Traditional operating system boundary standardization.
- **OCI Runtime Spec**: Container runtime specification; inspired USAGE's state machine design.
- **gRPC**: Underlying RPC protocol for ASI.
- **Protocol Buffers v3**: Data serialization format for ASI messages.

---

## Acknowledgments

The USAGE specification builds on decades of operating system design principles, adapting them to the novel challenge of autonomous agent execution. We acknowledge the foundational work of POSIX committees, the container runtime community, and emerging research in AI safety and formal verification.
