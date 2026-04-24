# Ravano Portfolio

Premium personal portfolio web app built with Next.js App Router + TypeScript.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- GSAP (scroll/parallax/hero animations)
- Framer Motion (micro-interactions)
- next-themes (dark/light mode)
- Resend API route integration for contact form

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Form Environment Variables

Create `.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```

If env vars are missing, the UI still works, but the form API route will return an error.

## Build and Deploy

```bash
npm run build
npm run start
```

Optimized for Vercel deployment.
