import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ravano Akbar Widodo | Fullstack Developer",
    template: "%s | Ravano Akbar Widodo",
  },
  description:
    "Premium personal portfolio of Ravano Akbar Widodo, a fullstack developer focused on modern web experiences, scalable architecture, and polished UX.",
  keywords: [
    "Ravano Akbar Widodo",
    "Fullstack Developer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Ravano Akbar Widodo" }],
  creator: "Ravano Akbar Widodo",
  applicationName: "Ravano Portfolio",
  openGraph: {
    title: "Ravano Akbar Widodo | Fullstack Developer",
    description:
      "Interactive portfolio showcasing professional experience, projects, and technical capabilities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravano Akbar Widodo | Fullstack Developer",
    description:
      "Interactive portfolio showcasing fullstack projects, experience, and contact channels.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1220" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
