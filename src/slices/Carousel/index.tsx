"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Center, Environment, View } from "@react-three/drei";
import { useRef, useState } from "react";
import clsx from "clsx";
import { Group } from "three";
import gsap from "gsap";

import FloatingCan from "@/components/FloatingCan";
import { ArrowIcon } from "./ArrowIcon";
import { WavyCircles } from "./WavyCircles";
import { hellProducts } from "@/config/hellProducts";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SPINS_ON_CHANGE = 6;

export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const sodaCanRef = useRef<Group>(null);
  const currentProduct = hellProducts[currentProductIndex];
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  function changeProduct(index: number) {
    if (!sodaCanRef.current) return;

    const nextIndex = (index + hellProducts.length) % hellProducts.length;
    const nextProduct = hellProducts[nextIndex];
    const tl = gsap.timeline();

    tl.to(
      sodaCanRef.current.rotation,
      {
        y:
          index > currentProductIndex
            ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 0.9,
      },
      0,
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: nextProduct.primaryColor,
          fill: nextProduct.primaryColor,
          ease: "power2.inOut",
          duration: 0.7,
        },
        0,
      )
      .to(".text-wrapper", { duration: 0.15, y: -8, opacity: 0 }, 0)
      .to({}, { onStart: () => setCurrentProductIndex(nextIndex) }, 0.4)
      .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.55);
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="flavours"
      className="carousel relative grid min-h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden px-4 py-12 text-white md:px-10 md:py-16"
      style={{
        background: `radial-gradient(circle at 20% 18%, ${currentProduct.accentColor}66, transparent 22rem), radial-gradient(circle at 78% 70%, ${currentProduct.secondaryColor}88, transparent 28rem), linear-gradient(135deg, ${currentProduct.primaryColor}, ${currentProduct.secondaryColor})`,
        color: currentProduct.textColor,
      }}
    >
      <div
        className="background pointer-events-none absolute inset-0 opacity-45 transition-colors duration-500"
        style={{ backgroundColor: currentProduct.primaryColor }}
      />

      <WavyCircles
        className="absolute left-1/2 top-1/2 h-[110vmin] -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{ color: currentProduct.primaryColor }}
      />

      <div className="relative mx-auto max-w-4xl rounded-3xl bg-black/25 px-5 py-5 text-center backdrop-blur-sm">
        <h2 className="text-4xl font-black uppercase leading-[1.08] md:text-6xl lg:text-7xl">
          Choose Your Energy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] text-white/85 md:text-lg">
          A focused product experience where each can changes the colour,
          motion, and campaign mood.
        </p>
      </div>

      <div className="relative grid grid-cols-[auto,minmax(220px,70vmin),auto] items-center justify-center">
        <ArrowButton
          onClick={() => changeProduct(currentProductIndex + 1)}
          direction="left"
          label="Previous product"
        />
        <View className="aspect-square h-[75vmin] min-h-[18rem] max-h-[620px]">
          <Center position={[isDesktop ? 0.1 : 0, 0, 1.5]}>
            <FloatingCan
              ref={sodaCanRef}
              floatIntensity={0.28}
              rotationIntensity={0.8}
              flavor={currentProduct.key}
            />
          </Center>

          <Environment
            files="/hdr/lobby.hdr"
            environmentIntensity={0.75}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>
        <ArrowButton
          onClick={() => changeProduct(currentProductIndex - 1)}
          direction="right"
          label="Next product"
        />
      </div>

      <div className="text-area relative mx-auto mb-2 max-w-2xl rounded-3xl bg-black/30 px-5 py-5 text-center backdrop-blur-sm">
        <div className="text-wrapper">
          <p className="text-2xl font-black uppercase leading-[1.1] md:text-4xl">
            {currentProduct.name}
          </p>
          <p className="mt-2 text-base leading-[1.5] opacity-90 md:text-lg">
            {currentProduct.description}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {hellProducts.map((product, index) => (
              <button
                key={product.key}
                onClick={() => changeProduct(index)}
                className={clsx(
                  "rounded-full border px-4 py-2 text-xs font-black uppercase transition md:text-sm",
                  index === currentProductIndex
                    ? "scale-105 bg-white text-black"
                    : "border-white/40 bg-black/20 text-white/80 hover:border-white",
                )}
                style={{
                  borderColor:
                    index === currentProductIndex
                      ? currentProduct.accentColor
                      : undefined,
                }}
              >
                {product.shortName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

type ArrowButtonProps = {
  direction?: "right" | "left";
  label: string;
  onClick: () => void;
};

function ArrowButton({
  label,
  onClick,
  direction = "right",
}: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="size-11 rounded-full border-2 border-white bg-black/30 p-3 text-white opacity-85 ring-white transition focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-14"
    >
      <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
      <span className="sr-only">{label}</span>
    </button>
  );
}
