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
      className="alternating-text-container relative bg-[#220008] text-white"
    >
      <div>
        <div id="product-concept" className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          <div className="alternating-section grid h-[70vh] place-items-center md:h-screen">
            <div
              className="my-auto max-w-3xl p-6 text-center max-md:rounded-2xl max-md:bg-black/65 max-md:backdrop-blur-lg md:bg-transparent md:backdrop-blur-none md:text-left"
            >
              <h2
                className="text-balance text-5xl font-bold md:text-7xl"
                style={{ color: brandConfig.colors.white }}
              >
                Built for Product Launches
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-balance text-xl"
                style={{ color: brandConfig.colors.white }}
              >
                This concept is designed as a lightweight campaign page, not a
                full website replacement.
              </p>
            </div>
          </div>

          {brandConfig.productFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="alternating-section grid h-[70vh] place-items-center gap-x-12 md:h-screen md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "md:col-start-2" : "md:col-start-1",
                  "my-auto w-full max-w-lg max-md:rounded-2xl max-md:bg-black/65 p-6 max-md:backdrop-blur-lg md:p-8",
                )}
              >
                <h2
                  className="text-balance text-4xl font-black uppercase leading-[1.08] md:text-5xl"
                  style={{ color: brandConfig.colors.white }}
                >
                  {feature.title}
                </h2>
                <div
                  className="mt-4 text-base leading-[1.5] md:text-xl"
                  style={{ color: brandConfig.colors.white }}
                >
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
