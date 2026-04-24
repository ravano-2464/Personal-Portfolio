# 🎨 Ravano Portfolio

> Premium personal portfolio web app built with **Next.js App Router + TypeScript**.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=for-the-badge&logo=greensock&logoColor=0B0B0B)](https://gsap.com/)
[![Resend](https://img.shields.io/badge/Resend-Email_API-000000?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com/)

## ✨ Highlights

- ⚡ **App Router architecture** (Next.js 16 + React 19)
- 🎭 **Smooth animations** with GSAP + Framer Motion
- 🖱️ **Custom cursor** and custom scrollbar experience
- 🌗 **Dark/Light mode** with `next-themes`
- 📬 **Contact form API** with validation (`zod`) + Resend integration
- 🧱 **Reusable UI components** using shadcn-style patterns

## 🧰 Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI Styling | Tailwind CSS v4, shadcn patterns, tw-animate-css |
| Animation | GSAP, Framer Motion |
| Validation | Zod |
| Email | Resend |
| Theming | next-themes |
| Linting | ESLint |

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 📜 Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Run development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🔐 Environment Variables

Copy `.env.example` to `.env.local`, lalu isi nilainya:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes (for sending email) | API key dari Resend |
| `CONTACT_TO_EMAIL` | Yes (for sending email) | Email tujuan pesan contact form |
| `CONTACT_FROM_EMAIL` | Yes (for sending email) | Sender format untuk Resend |

Catatan:
- UI tetap bisa dibuka tanpa env di atas.
- Endpoint `POST /api/contact` akan gagal jika env email belum diisi.

## 🗂️ Project Structure

```txt
src/
  app/
    api/contact/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
    providers/
    ui/
  features/
    portfolio/
      data/portfolio-data.ts
      sections/
      portfolio-page.tsx
  lib/
    resend.ts
    validators/contact.ts
```

## 🛠️ Content Customization

Kalau mau update isi portfolio (nama, pengalaman, skills, projects, contact), edit file:

`src/features/portfolio/data/portfolio-data.ts`

Kalau mau ubah behavior/form email:

- API route: `src/app/api/contact/route.ts`
- Email sender logic: `src/lib/resend.ts`
- Validation schema: `src/lib/validators/contact.ts`

## 🌐 Deploy

Production build:

```bash
npm run build
npm run start
```

Recommended deployment target: **Vercel**.

## 👤 Author

**Ravano Akbar Widodo**

- GitHub: [@ravano-2464](https://github.com/ravano-2464)
- Location: Tangerang, Banten, Indonesia
