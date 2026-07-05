"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";
import { brandConfig, contactHref } from "@/config/brandConfig";
/**
 * Props for `SkyDive`.
 */
export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

/**
 * Component for "SkyDive" Slices.
 */
const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      <h2 className="sr-only">Golden Eagle flavour call to action</h2>
      <View className="h-screen w-screen">
        <Scene
          flavor="original"
          sentence="Golden Eagle flavours"
        />
      </View>
      <div className="relative z-10 mx-auto -mt-72 max-w-3xl px-4 text-center text-white">
        <h2 className="text-balance text-[clamp(2rem,5vw,5rem)] font-black uppercase leading-[1.05]">
          {brandConfig.ctaSection.title}
        </h2>
      </div>
      <a
        href={contactHref}
        className="relative z-10 mx-auto mt-8 block w-fit rounded-full px-8 py-4 text-lg font-bold uppercase text-white"
        style={{ backgroundColor: brandConfig.colors.red }}
      >
        {brandConfig.ctaSection.cta}
      </a>
    </Bounded>
  );
};

export default SkyDive;
