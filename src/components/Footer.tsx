import React from "react";
import { brandConfig, contactHref } from "@/config/brandConfig";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer
      className="absolute bottom-0 w-full z-40 overflow-hidden text-white"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4 px-6 py-10 text-center">
        <p
          className="text-sm font-bold uppercase tracking-[0.35em]"
          style={{ color: brandConfig.colors.yellow }}
        >
          {brandConfig.companyName}
        </p>
        <p
          className="max-w-full text-balance text-3xl font-black uppercase tracking-wide"
          style={{ color: brandConfig.colors.white }}
        >
          {brandConfig.productName}
        </p>
        <a
          href={contactHref}
          className="text-base font-semibold"
          style={{ color: brandConfig.colors.yellow }}
        >
          {brandConfig.contactLabel}
        </a>
        <p className="max-w-xl text-sm text-white/60">
          {brandConfig.footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
