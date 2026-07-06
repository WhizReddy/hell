"use client";

import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";
import { brandConfig } from "@/config/brandConfig";

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
  SliceComponentProps<Content.AlternatingTextSlice>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText = ({ slice }: AlternatingTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-[#052762] text-white"
    >
      <div>
        <div id="product-concept" className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          <div className="alternating-section grid h-screen place-items-center">
            <div
              className="my-auto max-w-3xl rounded-2xl bg-black/20 p-6 text-center backdrop-blur-lg md:bg-transparent md:backdrop-blur-none md:text-left"
            >
              <h2
                className="text-balance text-5xl font-bold md:text-7xl"
                style={{ color: brandConfig.colors.white }}
              >
                Flavour Showcase
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-balance text-xl text-white/85">
                Six Golden Eagle variants, one animated product experience.
              </p>
            </div>
          </div>

          {brandConfig.productFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "md:col-start-2" : "md:col-start-1",
                  "my-auto w-full max-w-lg max-md:rounded-2xl max-md:bg-black/20 p-6 max-md:backdrop-blur-lg md:p-8",
                )}
              >
                <h2
                  className="text-balance text-5xl font-bold md:text-6xl"
                  style={{ color: brandConfig.colors.white }}
                >
                  {feature.title}
                </h2>
                <div className="mt-4 text-xl text-white/85">
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
