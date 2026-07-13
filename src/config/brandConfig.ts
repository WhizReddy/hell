export type BrandConfig = {
  companyName: string;
  productName: string;
  brandName: string;
  productType: string;
  tagline: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  contactLabel: string;
  contactHref: string;
  modelPath: string;
  colors: {
    black: string;
    deepBlack: string;
    primary: string;
    secondary: string;
    accent: string;
    red: string;
    darkRed: string;
    silver: string;
    metallicGray: string;
    blueAccent: string;
    greenAccent: string;
    grapeAccent: string;
    deepRed: string;
    white: string;
  };
  productFeatures: {
    title: string;
    description: string;
  }[];
  brandSection: {
    title: string;
    copy: string;
  };
  ctaSection: {
    title: string;
    cta: string;
  };
  footerDisclaimer: string;
};

export const brandConfig = {
  companyName: "HELL Energy",
  productName: "HELL Energy Drink",
  brandName: "HELL",
  productType: "Energy Drink",
  tagline: "Dark, sharp, can-first energy.",
  heroEyebrow: "HELL Energy Drink",
  heroTitle: "Fuel the Edge",
  heroSubtitle:
    "An unofficial 3D campaign concept built around the HELL can range.",
  ctaPrimary: "Explore Concept",
  ctaSecondary: "View Variants",
  contactLabel: "Contact the Brand Team",
  contactHref: "https://www.hellenergy.com/gb/en-contact/contact/",
  modelPath: "/Soda-can.gltf",
  colors: {
    black: "#050505",
    deepBlack: "#090909",
    primary: "#050505",
    secondary: "#d6001c",
    accent: "#d7d7d7",
    red: "#d6001c",
    darkRed: "#8f0012",
    silver: "#d7d7d7",
    metallicGray: "#3a3a3a",
    blueAccent: "#0066ff",
    greenAccent: "#26c94a",
    grapeAccent: "#b0003a",
    deepRed: "#8f0012",
    white: "#ffffff",
  },
  productFeatures: [
    {
      title: "Clear Product Focus",
      description:
        "A short product section keeps attention on the can, the variant colour, and the campaign mood.",
    },
    {
      title: "Retail Launch Ready",
      description:
        "Sharp contrast, smooth motion, and mobile-ready layouts support launches, retail, and social traffic.",
    },
  ],
  brandSection: {
    title: "A Can-First Digital Campaign",
    copy: "A focused landing page can make a canned drink feel stronger online, whether it is used for launches, flavour campaigns, distributor presentations, or social traffic.",
  },
  ctaSection: {
    title: "Turn the can into the campaign.",
    cta: "Contact the Brand Team",
  },
  footerDisclaimer:
    "Unofficial 3D product campaign concept. Not affiliated with HELL Energy.",
} satisfies BrandConfig;

export const contactHref = brandConfig.contactHref;
