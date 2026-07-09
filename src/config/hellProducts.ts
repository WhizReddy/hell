export type HellProductKey =
  | "classic"
  | "zero"
  | "redGrape"
  | "apple"
  | "focus";

export type HellProduct = {
  key: HellProductKey;
  name: string;
  shortName: string;
  productImagePath: string;
  labelPath: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  description: string;
  textureOffsetX: number;
  textureOffsetY: number;
  textureRepeatX: number;
  textureRepeatY: number;
  textureRotation: number;
};

export const hellProducts = [
  {
    key: "classic",
    name: "HELL Classic",
    shortName: "Classic",
    productImagePath: "/products/hell-classic.png",
    labelPath: "/labels/hell-classic.png",
    primaryColor: "#050505",
    secondaryColor: "#d6001c",
    accentColor: "#ffffff",
    textColor: "#ffffff",
    description:
      "The core HELL Energy identity with a dark, sharp, and high-impact can-focused presentation.",
    textureOffsetX: 0,
    textureOffsetY: 0,
    textureRepeatX: 1,
    textureRepeatY: 1,
    textureRotation: 0,
  },
  {
    key: "zero",
    name: "HELL Zero Sugar",
    shortName: "Zero Sugar",
    productImagePath: "/products/hell-zero.png",
    labelPath: "/labels/hell-zero.png",
    primaryColor: "#111111",
    secondaryColor: "#d7d7d7",
    accentColor: "#ffffff",
    textColor: "#ffffff",
    description:
      "A cleaner zero-sugar direction with black, white, and silver contrast.",
    textureOffsetX: 0,
    textureOffsetY: 0,
    textureRepeatX: 1,
    textureRepeatY: 1,
    textureRotation: 0,
  },
  {
    key: "redGrape",
    name: "HELL Strong Red Grape",
    shortName: "Red Grape",
    productImagePath: "/products/hell-red-grape.png",
    labelPath: "/labels/hell-red-grape.png",
    primaryColor: "#3a0010",
    secondaryColor: "#d6001c",
    accentColor: "#ff4f7b",
    textColor: "#ffffff",
    description:
      "A dark red flavour direction with stronger colour impact and fruit-led campaign energy.",
    textureOffsetX: 0,
    textureOffsetY: 0,
    textureRepeatX: 1,
    textureRepeatY: 1,
    textureRotation: 0,
  },
  {
    key: "apple",
    name: "HELL Strong Apple",
    shortName: "Apple",
    productImagePath: "/products/hell-apple.png",
    labelPath: "/labels/hell-apple.png",
    primaryColor: "#071407",
    secondaryColor: "#25c94a",
    accentColor: "#b6ff3b",
    textColor: "#ffffff",
    description:
      "A sharper green flavour direction with a fresh, high-contrast product look.",
    textureOffsetX: 0,
    textureOffsetY: 0,
    textureRepeatX: 1,
    textureRepeatY: 1,
    textureRotation: 0,
  },
  {
    key: "focus",
    name: "HELL Focus",
    shortName: "Focus",
    productImagePath: "/products/hell-focus.png",
    labelPath: "/labels/hell-focus.png",
    primaryColor: "#050505",
    secondaryColor: "#0066ff",
    accentColor: "#d6001c",
    textColor: "#ffffff",
    description:
      "A blue-accent direction built for a sharper, more focused product presentation.",
    textureOffsetX: 0,
    textureOffsetY: 0,
    textureRepeatX: 1,
    textureRepeatY: 1,
    textureRotation: 0,
  },
] as const satisfies readonly HellProduct[];

export const typedHellProducts: readonly HellProduct[] = hellProducts;

export const defaultHellProductKey: HellProductKey = "classic";

export const hellLabelPaths = Object.fromEntries(
  typedHellProducts.map((product) => [product.key, product.labelPath]),
) as Record<HellProductKey, string>;

export function getHellProduct(key: string | null | undefined) {
  return (
    typedHellProducts.find((product) => product.key === key) ??
    typedHellProducts[0]
  );
}
