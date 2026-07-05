export type BrandConfig = {
  companyName: string;
  productName: string;
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
    blue: string;
    yellow: string;
    red: string;
    white: string;
    darkBlue: string;
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
  companyName: "Golden Eagle",
  productName: "Golden Eagle Flavours",
  tagline: "Refreshing energy for every season.",
  heroEyebrow: "Golden Eagle Energy Drink",
  heroTitle: "Refreshing Energy for Every Season",
  heroSubtitle:
    "An unofficial animated product concept inspired by Golden Eagle's flavour range.",
  ctaPrimary: "Explore Flavours",
  ctaSecondary: "View Cans",
  contactLabel: "View Flavours",
  contactHref: "#flavours",
  modelPath: "/Soda-can.gltf",
  colors: {
    blue: "#0b3f91",
    yellow: "#f4d131",
    red: "#e31b23",
    white: "#ffffff",
    darkBlue: "#052762",
  },
  productFeatures: [
    {
      title: "Flavour-led browsing",
      description: "Choose by product variant, not can size.",
    },
    {
      title: "Real label textures",
      description: "Each can uses the uploaded Golden Eagle artwork.",
    },
    {
      title: "Responsive product view",
      description: "Short copy keeps text clear beside the cans.",
    },
    {
      title: "Dynamic colour themes",
      description: "The page colour follows the selected flavour.",
    },
  ],
  brandSection: {
    title: "Built from Kosovo. Made to Fly Further.",
    copy: "Frutex started in Suhareka in 1994 and introduced Golden Eagle in 2006. This concept presents the flavour range through a modern animated product experience.",
  },
  ctaSection: {
    title: "Explore the Golden Eagle flavour range.",
    cta: "View Flavours",
  },
  footerDisclaimer:
    "Unofficial 3D product campaign concept. Not affiliated with Frutex L.L.C. or Golden Eagle Energy Drink.",
} satisfies BrandConfig;

export const contactHref = brandConfig.contactHref;
