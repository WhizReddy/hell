"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";

import { Bounded } from "@/components/Bounded";
import { TextSplitter } from "@/components/TextSplitter";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { brandConfig, contactHref } from "@/config/brandConfig";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .from(".hero-header-word", {
          scale: 1.08,
          y: 16,
          ease: "power3.out",
          delay: 0.1,
          duration: 0.4,
          stagger: 0.04,
        })
        .from(
          ".hero-body",
          {
            y: 14,
            duration: 0.35,
          },
          "-=.15",
        )
        .from(
          ".hero-button",
          {
            y: 12,
            duration: 0.35,
          },
          "-=.15",
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: brandConfig.colors.primary,
          },
          {
            backgroundColor: brandConfig.colors.primary,
            overwrite: "auto",
          },
          1,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] },
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero relative"
      style={{
        background:
          "radial-gradient(circle at 18% 22%, rgba(214, 0, 28, 0.58), transparent 24rem), radial-gradient(circle at 84% 64%, rgba(179, 22, 112, 0.48), transparent 28rem), linear-gradient(135deg, #1b0005 0%, #050505 48%, #3a0010 100%)",
      }}
    >
      {isDesktop && (
        <div className="pointer-events-none absolute inset-0 z-50 hidden w-screen md:block">
          <View className="hero-scene sticky top-0 h-screen w-screen">
            <Scene />
            <Bubbles count={300} speed={2} repeat={true} />
          </View>
        </div>
      )}

      <div className="grid">
        <div className="relative z-[80] grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center px-4 text-center">
            <p
              className="mb-4 text-xs font-black uppercase tracking-[0.35em] md:text-sm"
              style={{ color: "#ff5665" }}
            >
              {brandConfig.heroEyebrow}
            </p>
            <h1
              aria-label={brandConfig.heroTitle}
              className="hero-header max-w-5xl text-5xl font-black uppercase leading-[1.02] md:text-7xl lg:text-8xl"
              style={{ color: brandConfig.colors.white }}
            >
              <TextSplitter
                text={brandConfig.heroTitle}
                className="hero-header-word"
              />
            </h1>
            <div
              className="hero-body mt-5 max-w-xl text-balance text-base font-normal leading-[1.5] md:text-lg"
              style={{ color: brandConfig.colors.white }}
            >
              <p>{brandConfig.heroSubtitle}</p>
            </div>
            <div className="hero-button mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#product-concept"
                className="rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105 md:px-8 md:text-base"
                style={{ backgroundColor: "#ffffff" }}
              >
                {brandConfig.ctaPrimary}
              </a>
              <a
                href={contactHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border px-6 py-3 text-sm font-black uppercase tracking-wide transition hover:scale-105 md:px-8 md:text-base"
                style={{
                  borderColor: brandConfig.colors.accent,
                  color: brandConfig.colors.white,
                  backgroundColor: "rgba(5, 5, 5, 0.36)",
                }}
              >
                {brandConfig.ctaSecondary}
              </a>
            </div>
            <Image
              src="/images/hell-mobile-cans.png"
              alt="HELL Energy can range concept"
              width={1000}
              height={1300}
              priority
              className="mt-5 h-[25svh] max-h-[220px] w-auto object-contain md:hidden"
            />
          </div>
        </div>

        <div className="text-side relative z-[80] grid min-h-[70svh] items-center gap-5 py-10 md:h-screen md:min-h-screen md:grid-cols-2 md:py-0">
          <div>
            <h2
              aria-label={brandConfig.brandSection.title}
              className="text-side-heading text-balance text-4xl font-black uppercase leading-[1.08] md:text-5xl lg:text-6xl"
              style={{ color: brandConfig.colors.white }}
            >
              <TextSplitter text={brandConfig.brandSection.title} />
            </h2>
            <div
              className="text-side-body mt-4 max-w-xl text-balance text-base font-normal leading-[1.55] md:text-lg"
              style={{ color: brandConfig.colors.white }}
            >
              <p>{brandConfig.brandSection.copy}</p>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
