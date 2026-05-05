export async function onRequestPost(context) {
  try {
    const req = context.request;
    const contentType = req.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
      return json({ error: 'Content-Type must be application/json' }, 415);
    }

    const body = await req.json();
    const { name, company, email, roleNature, availability, message } = body || {};

    if (!name || !company || !email || !roleNature || !message) {
      return json({ error: 'Missing required fields.' }, 400);
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return json({ error: 'Invalid email format.' }, 400);
    }

    const recipient = context.env.CONTACT_TO_EMAIL || 'shivashankar.tummala@gmail.com';
    const from = context.env.CONTACT_FROM_EMAIL || 'noreply@sivatummala-website.pages.dev';

    const subject = `New Architecture Inquiry from ${name}`;
    const textBody = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Role Nature: ${roleNature}`,
      `Immediate Availability: ${availability || 'No'}`,
      '',
      'Message:',
      message
    ].join('\n');

    const mailRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: recipient, name: 'Siva Sankar Tummala' }] }],
        from: { email: from, name: 'SivaTummala Website Bot' },
        subject,
        content: [{ type: 'text/plain', value: textBody }],
        reply_to: { email, name }
      })
    });

    if (!mailRes.ok) {
      const errorText = await mailRes.text();
      return json({ error: `Mail send failed: ${errorText}` }, 502);
    }

    return json({ ok: true, message: 'Inquiry sent successfully.' }, 200);
  } catch (err) {
    return json({ error: err.message || 'Unexpected server error.' }, 500);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}
