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
              className="max-w-3xl border p-5 text-center backdrop-blur-lg max-md:bg-black/50"
              style={{
                borderColor: brandConfig.colors.yellow,
                backgroundColor: "rgb(5 5 5 / 0.35)",
              }}
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
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "border p-5 backdrop-blur-lg max-md:bg-black/50",
                )}
                style={{
                  borderColor: brandConfig.colors.yellow,
                  backgroundColor: "rgb(5 5 5 / 0.35)",
                }}
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
