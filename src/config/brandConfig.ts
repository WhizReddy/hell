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
    primary: string;
    secondary: string;
    accent: string;
    electricBlue: string;
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
  companyName: "Big Shock",
  productName: "Big Shock Energy Drink",
  brandName: "Big Shock!",
  productType: "Energy Drink",
  tagline: "Bold canned energy, built for impact.",
  heroEyebrow: "Big Shock Energy Drink",
  heroTitle: "Shock the Shelf",
  heroSubtitle:
    "An unofficial 3D product campaign concept for Big Shock, built to present canned energy drinks with stronger motion, sharper visuals, and a modern digital product experience.",
  ctaPrimary: "Explore Concept",
  ctaSecondary: "View Flavours",
  contactLabel: "Contact the Brand Team",
  contactHref: "#contact",
  modelPath: "/Soda-can.gltf",
  colors: {
    primary: "#050505",
    secondary: "#ffdd00",
    accent: "#ff2b00",
    electricBlue: "#008cff",
    deepRed: "#c90018",
    white: "#ffffff",
  },
  productFeatures: [
    {
      title: "Can-first presentation",
      description:
        "A clean product showcase focused on the can, the variant colour, and the campaign mood.",
    },
    {
      title: "Retail-ready motion",
      description:
        "Short sections, strong contrast, and smooth 3D movement built for web and mobile viewing.",
    },
  ],
  brandSection: {
    title: "A Can-First Digital Campaign",
    copy: "A focused product landing page can make a canned drink feel stronger online, whether it is used for launch campaigns, distributor presentations, social traffic, or retail support.",
  },
  ctaSection: {
    title: "Turn the can into the campaign.",
    cta: "Contact the Brand Team",
  },
  footerDisclaimer:
    "Unofficial 3D product campaign concept. Not affiliated with Big Shock or its parent company.",
} satisfies BrandConfig;

export const contactHref = brandConfig.contactHref;
