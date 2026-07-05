"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
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
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 1.25,
          opacity: 0,
          ease: "power3.out",
          delay: 0.2,
          duration: 0.45,
          stagger: 0.08,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

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
            backgroundColor: brandConfig.colors.darkBlue,
          },
          {
            backgroundColor: brandConfig.colors.blue,
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
      className="hero opacity-0"
    >
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
          <Bubbles count={300} speed={2} repeat={true} />
        </View>
      )}

      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1
              aria-label={brandConfig.heroTitle}
              className="hero-header max-w-5xl px-4 text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl"
              style={{ color: brandConfig.colors.white }}
            >
              <TextSplitter
                text={brandConfig.heroTitle}
                className="hero-header-word"
              />
            </h1>
            <div
              className="hero-subheading mt-6 text-3xl font-semibold lg:text-4xl"
              style={{ color: brandConfig.colors.yellow }}
            >
              <p>{brandConfig.productName}</p>
            </div>
            <div
              className="hero-body max-w-2xl text-balance text-xl font-normal md:text-2xl"
              style={{ color: brandConfig.colors.white }}
            >
              <p>{brandConfig.heroSubtitle}</p>
            </div>

          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <img
            src="/all-cans-bunched.png"
            alt="All Golden Eagle Flavours"
            className="w-full md:hidden"
          />
          <div>
            <h2
              aria-label={brandConfig.brandSection.title}
              className="text-side-heading text-balance text-6xl font-black uppercase lg:text-8xl"
              style={{ color: brandConfig.colors.white }}
            >
              <TextSplitter text={brandConfig.brandSection.title} />
            </h2>
            <div
              className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal"
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
