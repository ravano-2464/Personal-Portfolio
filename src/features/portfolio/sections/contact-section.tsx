"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GitBranch, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/features/portfolio/components/section-heading";
import { cn } from "@/lib/utils";
import type { ContactDetails } from "@/features/portfolio/types";

type ContactSectionProps = {
  contact: ContactDetails;
};

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const defaultState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection({ contact }: ContactSectionProps) {
  const [formState, setFormState] = React.useState<ContactFormState>(defaultState);
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = React.useState("");

  const onFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const body = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(body?.message ?? "Unable to send message.");
      }

      setStatus("success");
      setFeedback("Message sent successfully. Thank you for reaching out.");
      setFormState(defaultState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the message.",
      );
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s Build Something Impactful"
          description="Open to collaborations, contract projects, and full-time opportunities. Reach out through the form or direct channels."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card data-reveal className="rounded-2xl border border-border/70 bg-card/80">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Your message will be sent using the integrated Resend-powered API
                route.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formState.name}
                      onChange={onFieldChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={onFieldChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and goals."
                    value={formState.message}
                    onChange={onFieldChange}
                    required
                    rows={7}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "rounded-full px-6",
                  )}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </motion.button>

                <p
                  role="status"
                  aria-live="polite"
                  className={cn(
                    "text-sm",
                    status === "success" && "text-emerald-600 dark:text-emerald-400",
                    status === "error" && "text-destructive",
                    status === "idle" && "text-muted-foreground",
                  )}
                >
                  {feedback || "You can expect a response within 1-2 business days."}
                </p>
              </form>
            </CardContent>
          </Card>

          <div data-reveal className="space-y-4">
            <Card className="rounded-2xl border border-border/70 bg-card/80">
              <CardHeader>
                <CardTitle>Direct Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 rounded-xl border border-border/65 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-primary" />
                  {contact.email}
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border/65 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="size-4 text-primary" />
                  Chat on WhatsApp
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border/65 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GitBranch className="size-4 text-primary" />
                  GitHub Profile
                </a>
                <div className="flex items-center gap-2 rounded-xl border border-border/65 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground">
                  <Phone className="size-4 text-primary" />
                  {contact.phone}
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-border/65 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  {contact.location}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-border/70 bg-gradient-to-br from-primary/14 via-background/30 to-cyan-500/12">
              <CardHeader>
                <CardTitle>Current Availability</CardTitle>
                <CardDescription>
                  Open for full-time roles and contract collaborations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "rounded-full border-primary/40 bg-primary/8 px-4 text-primary hover:bg-primary/12 hover:text-primary",
                  )}
                >
                  Start a WhatsApp Chat
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
