"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePortfolioAnimations() {
  React.useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.75 },
      });

      heroTimeline
        .from("[data-hero-eyebrow]", { y: 18, opacity: 0 })
        .from("[data-hero-title]", { y: 30, opacity: 0 }, "-=0.45")
        .from("[data-hero-copy]", { y: 24, opacity: 0 }, "-=0.42")
        .from("[data-hero-actions]", { y: 20, opacity: 0 }, "-=0.45")
        .from("[data-hero-card]", { y: 18, opacity: 0, scale: 0.96 }, "-=0.5");

      gsap.to("[data-parallax='soft']", {
        yPercent: -16,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to("[data-parallax='strong']", {
        yPercent: -28,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 34,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
}
