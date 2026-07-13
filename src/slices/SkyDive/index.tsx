"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";
import { brandConfig, contactHref } from "@/config/brandConfig";

export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  return (
    <>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="skydive relative h-screen overflow-hidden bg-[#270008]"
        style={{
          background:
            "radial-gradient(circle at 28% 24%, rgba(214, 0, 28, 0.5), transparent 24rem), radial-gradient(circle at 72% 68%, rgba(179, 22, 112, 0.38), transparent 26rem), linear-gradient(135deg, #270008, #050505 58%, #370015)",
        }}
      >
        <h2 className="sr-only">HELL Energy flying can animation</h2>
        <View className="h-screen w-screen">
          <Scene flavor="classic" sentence="HELL Energy" />
        </View>
      </Bounded>

      <section
        id="contact"
        className="relative z-40 grid min-h-[70svh] place-items-center px-4 py-16 text-center"
        style={{
          background:
            "radial-gradient(circle at 70% 35%, rgba(179, 22, 112, 0.34), transparent 24rem), linear-gradient(135deg, #170004, #050505 58%, #2b0013)",
        }}
      >
        <div
          className="mx-auto max-w-3xl"
          style={{ color: brandConfig.colors.white }}
        >
          <h2 className="text-balance text-4xl font-black uppercase leading-[1.05] md:text-6xl lg:text-7xl">
            {brandConfig.ctaSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] opacity-80 md:text-xl">
            A modern 3D landing page gives the product a stronger first
            impression across web and mobile.
          </p>
          <a
            href={contactHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full px-7 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105 md:text-base"
            style={{ backgroundColor: "#f01b32" }}
          >
            {brandConfig.ctaSection.cta}
          </a>
        </div>
      </section>
    </>
  );
};

export default SkyDive;
