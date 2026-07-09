export type HellProductKey =
  | "classic"
  | "blackCherry"
  | "caffeineFree"
  | "redGrape"
  | "apple";

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
    secondaryColor: "#e20d1d",
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
    key: "blackCherry",
    name: "HELL Black Cherry",
    shortName: "Black Cherry",
    productImagePath: "/products/hell-black-cherry.png",
    labelPath: "/labels/hell-black-cherry.png",
    primaryColor: "#220018",
    secondaryColor: "#b31670",
    accentColor: "#ff4fb4",
    textColor: "#ffffff",
    description:
      "A purple-black flavour direction with stronger shelf colour and a sharp can-first presentation.",
    textureOffsetX: 0,
    textureOffsetY: 0,
    textureRepeatX: 1,
    textureRepeatY: 1,
    textureRotation: 0,
  },
  {
    key: "caffeineFree",
    name: "HELL Caffeine Free",
    shortName: "Caffeine Free",
    productImagePath: "/products/hell-caffeine-free.png",
    labelPath: "/labels/hell-caffeine-free.png",
    primaryColor: "#6f1010",
    secondaryColor: "#d4a848",
    accentColor: "#ffe08a",
    textColor: "#ffffff",
    description:
      "A red and gold can direction with a warmer premium campaign look.",
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
    primaryColor: "#101010",
    secondaryColor: "#e00016",
    accentColor: "#ff3131",
    textColor: "#ffffff",
    description:
      "A strong apple direction with red impact, black contrast, and a bold product look.",
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
    primaryColor: "#76000b",
    secondaryColor: "#f2f2f2",
    accentColor: "#ff2d2d",
    textColor: "#ffffff",
    description:
      "A white and red flavour direction with clean contrast and strong product visibility.",
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
