import React from "react";
import { brandConfig } from "@/config/brandConfig";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="relative z-[90] -mb-24 flex items-center justify-between px-5 py-5 md:px-8">
      <div className="uppercase">
        <p
          className="text-2xl font-black leading-none md:text-3xl"
          style={{ color: brandConfig.colors.white }}
        >
          {brandConfig.brandName}
        </p>
        <p
          className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] md:text-xs"
          style={{ color: brandConfig.colors.secondary }}
        >
          {brandConfig.productType}
        </p>
      </div>
      <a
        href="#flavours"
        className="rounded-full border border-white/35 bg-black/30 px-4 py-2 text-xs font-black uppercase text-white transition hover:border-white hover:bg-white hover:text-black md:px-5 md:text-sm"
      >
        Variants
      </a>
    </header>
  );
}
