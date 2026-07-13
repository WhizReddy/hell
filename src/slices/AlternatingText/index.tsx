"use client";

import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import Image from "next/image";
import Scene from "./Scene";
import clsx from "clsx";
import { brandConfig } from "@/config/brandConfig";

const mobileProductImages = [
  "/products/hell-classic.png",
  "/products/hell-black-cherry.png",
  "/products/hell-caffeine-free.png",
];

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
          <View className="alternating-text-view absolute left-0 top-0 hidden h-screen w-full md:block">
            <Scene />
          </View>

          <div className="alternating-section grid min-h-[82svh] place-items-center gap-4 py-10 md:h-screen md:min-h-0 md:grid-cols-2 md:py-0">
            <div className="relative h-[42svh] w-full md:hidden">
              <Image
                src={mobileProductImages[0]}
                alt="HELL Classic can"
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="my-auto max-w-3xl p-6 text-center md:col-start-1 md:row-start-1 md:bg-transparent md:text-left">
              <h2
                className="text-balance text-4xl font-black uppercase leading-[1.08] md:text-6xl"
                style={{ color: brandConfig.colors.white }}
              >
                Built for Product Launches
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-balance text-base leading-[1.55] md:text-lg"
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
              className="alternating-section grid min-h-[82svh] place-items-center gap-4 py-10 md:h-screen md:min-h-0 md:grid-cols-2 md:gap-x-12 md:py-0"
            >
              <div className="relative h-[42svh] w-full md:hidden">
                <Image
                  src={mobileProductImages[index + 1]}
                  alt={`${feature.title} HELL can`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <div
                className={clsx(
                  index % 2 === 0 ? "md:col-start-2" : "md:col-start-1",
                  "my-auto w-full max-w-lg p-6 text-center md:p-8 md:text-left",
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
