import { Metadata } from "next";

import Hero from "@/slices/Hero";
import AlternatingText from "@/slices/AlternatingText";
import Carousel from "@/slices/Carousel";
import SkyDive from "@/slices/SkyDive";
import BigText from "@/slices/BigText";
import { brandConfig } from "@/config/brandConfig";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${brandConfig.productName} | ${brandConfig.companyName}`,
    description: brandConfig.heroSubtitle,
    openGraph: {
      title: `${brandConfig.companyName} energy drink product concept`,
      description: brandConfig.heroSubtitle,
    },
  };
}

export default async function Index() {
  const baseSlice = {
    variation: "default",
    version: "initial",
    items: [],
    primary: {},
  };

  return (
    <>
      <Hero
        slice={{ ...baseSlice, slice_type: "hero" } as never}
        index={0}
        slices={[]}
        context={undefined}
      />
      <SkyDive
        slice={{ ...baseSlice, slice_type: "sky_dive" } as never}
        index={1}
        slices={[]}
        context={undefined}
      />
      <Carousel
        slice={{ ...baseSlice, slice_type: "carousel" } as never}
        index={2}
        slices={[]}
        context={undefined}
      />
      <AlternatingText
        slice={{ ...baseSlice, slice_type: "alternating_text" } as never}
        index={3}
        slices={[]}
        context={undefined}
      />
      <BigText
        slice={{ ...baseSlice, slice_type: "big_text" } as never}
        index={4}
        slices={[]}
        context={undefined}
      />
    </>
  );
}
