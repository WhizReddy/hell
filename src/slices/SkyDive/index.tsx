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
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen bg-[#090909]"
    >
      <h2 className="sr-only">HELL Energy campaign call to action</h2>
      <View className="h-screen w-screen">
        <Scene flavor="classic" sentence="HELL Energy" />
      </View>
      <div
        id="contact"
        className="relative z-10 mx-auto -mt-72 max-w-3xl px-4 text-center"
        style={{ color: brandConfig.colors.white }}
      >
        <h2 className="text-balance text-4xl font-black uppercase leading-[1.05] md:text-6xl lg:text-7xl">
          {brandConfig.ctaSection.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] opacity-80 md:text-xl">
          A modern 3D landing page gives the product a stronger first impression
          across web and mobile.
        </p>
        <a
          href={contactHref}
          className="mt-6 inline-flex rounded-full px-7 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105 md:text-base"
          style={{ backgroundColor: brandConfig.colors.secondary }}
        >
          {brandConfig.ctaSection.cta}
        </a>
      </div>
    </Bounded>
  );
};

export default SkyDive;
