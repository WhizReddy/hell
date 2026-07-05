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
import { brandConfig } from "@/config/brandConfig";
import { goldenEagleProducts } from "@/config/goldenEagleProducts";

const SPINS_ON_CHANGE = 6;

export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const sodaCanRef = useRef<Group>(null);
  const currentProduct = goldenEagleProducts[currentFlavorIndex];

  function changeFlavor(index: number) {
    if (!sodaCanRef.current) return;

    const nextIndex =
      (index + goldenEagleProducts.length) % goldenEagleProducts.length;
    const nextProduct = goldenEagleProducts[nextIndex];

    const tl = gsap.timeline();

    tl.to(
      sodaCanRef.current.rotation,
      {
        y:
          index > currentFlavorIndex
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
      .to({}, { onStart: () => setCurrentFlavorIndex(nextIndex) }, 0.4)
      .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.55);
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="flavours"
      className="carousel relative grid min-h-screen grid-rows-[auto,auto,1fr,auto] justify-center overflow-hidden px-4 py-10 text-white"
      style={{
        background: `linear-gradient(135deg, ${currentProduct.primaryColor}, ${currentProduct.secondaryColor})`,
      }}
    >
      <div
        className="background pointer-events-none absolute inset-0 opacity-60 transition-colors duration-500"
        style={{ backgroundColor: currentProduct.primaryColor }}
      />

      <WavyCircles
        className="absolute left-1/2 top-1/2 h-[110vmin] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{ color: currentProduct.primaryColor }}
      />

      <h2 className="relative mx-auto max-w-4xl text-center text-[clamp(2rem,5vw,5rem)] font-bold leading-[1.08]">
        Learn More About Our Flavours
      </h2>

      <div className="relative mx-auto mt-5 flex max-w-5xl flex-wrap justify-center gap-2">
        {goldenEagleProducts.map((product, index) => {
          const isSelected = index === currentFlavorIndex;

          return (
            <button
              key={product.key}
              onClick={() => changeFlavor(index)}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-bold uppercase transition",
                isSelected ? "scale-105 opacity-100" : "scale-95 opacity-75",
              )}
              style={{
                borderColor: isSelected ? currentProduct.accentColor : "#ffffff",
                backgroundColor: isSelected
                  ? "rgb(255 255 255 / 0.18)"
                  : "rgb(255 255 255 / 0.08)",
                color: currentProduct.textColor,
              }}
            >
              {product.shortName}
            </button>
          );
        })}
      </div>

      <div className="relative grid grid-cols-[auto,minmax(220px,70vmin),auto] items-center justify-center">
        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          direction="left"
          label="Previous flavour"
        />
        <View className="aspect-square h-[60vmin] min-h-56 max-h-[620px]">
          <Center position={[0, 0, 1.5]}>
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
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          direction="right"
          label="Next flavour"
        />
      </div>

      <div
        className="text-area relative mx-auto mb-2 max-w-2xl rounded-lg border p-4 text-center backdrop-blur-md"
        style={{
          borderColor: currentProduct.accentColor,
          boxShadow: `0 0 32px ${currentProduct.accentColor}33`,
        }}
      >
        <div className="text-wrapper">
          <p className="text-[clamp(1.5rem,3vw,3rem)] font-bold leading-[1.1]">
            {currentProduct.name}
          </p>
          <p className="mt-2 text-[clamp(0.95rem,1.1vw,1.15rem)] leading-[1.5] opacity-90">
            {currentProduct.description}
          </p>
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
      className="size-11 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white transition focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-14"
    >
      <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
      <span className="sr-only">{label}</span>
    </button>
  );
}
