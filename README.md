# sivatummala-website

Next.js (App Router) portfolio deployed on Cloudflare Pages with Pages Functions contact API.

## Local

```bash
npm install
npm run dev
```

## Build (Cloudflare Pages)

- Framework preset: `Next.js`
- Build command: `npm run build`
- Output directory: `.next`

## Pages Function Email

`/functions/api/contact.js` sends inquiry emails via Mailchannels.

Set Cloudflare Pages environment variables:

- `CONTACT_TO_EMAIL=shivashankar.tummala@gmail.com`
- `CONTACT_FROM_EMAIL=noreply@<your-domain>`

## Security Headers

Strict security headers are defined in `public/_headers`, including CSP and HSTS.
