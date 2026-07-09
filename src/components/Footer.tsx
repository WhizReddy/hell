import React from "react";
import { brandConfig, contactHref } from "@/config/brandConfig";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer
      className="relative z-40 w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #240007 0%, #050505 52%, #3a001f 100%)",
        color: brandConfig.colors.white,
      }}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4 px-6 py-10 text-center">
        <p
          className="text-sm font-bold uppercase tracking-[0.3em]"
          style={{ color: brandConfig.colors.secondary }}
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
          style={{ color: brandConfig.colors.secondary }}
        >
          {brandConfig.contactLabel}
        </a>
        <p className="max-w-xl text-sm opacity-60">
          {brandConfig.footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
