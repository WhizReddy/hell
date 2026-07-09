import React from "react";
import { brandConfig } from "@/config/brandConfig";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center px-4 py-6">
      <div className="z-10 text-center uppercase">
        <p
          className="text-sm font-bold tracking-[0.3em]"
          style={{ color: brandConfig.colors.secondary }}
        >
          {brandConfig.companyName}
        </p>
        <p
          className="text-2xl font-black tracking-wide md:text-4xl"
          style={{ color: brandConfig.colors.white }}
        >
          {brandConfig.productName}
        </p>
      </div>
    </header>
  );
}
