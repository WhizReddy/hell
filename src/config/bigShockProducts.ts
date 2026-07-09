export type BigShockProductKey = "original" | "gold" | "red" | "blue";

export type BigShockProduct = {
  key: BigShockProductKey;
  name: string;
  shortName: string;
  labelPath: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  description: string;
  textureOffset?: [number, number];
  textureRepeat?: [number, number];
  textureRotation?: number;
};

export const bigShockProducts = [
  {
    key: "original",
    name: "Big Shock Original",
    shortName: "Original",
    labelPath: "/labels/bigshock-original.png",
    primaryColor: "#050505",
    secondaryColor: "#ffdd00",
    accentColor: "#ff2b00",
    textColor: "#ffffff",
    description:
      "A bold energy-drink identity built around strong contrast, yellow impact, and a sharp can-focused campaign style.",
    textureOffset: [-0.25, 0],
  },
  {
    key: "gold",
    name: "Big Shock Gold Edition",
    shortName: "Gold",
    labelPath: "/labels/bigshock-gold.png",
    primaryColor: "#111111",
    secondaryColor: "#d8aa28",
    accentColor: "#ffdd00",
    textColor: "#ffffff",
    description:
      "A premium gold direction for a stronger shelf presence and a more elevated product-campaign feel.",
    textureOffset: [-0.25, 0],
  },
  {
    key: "red",
    name: "Big Shock Red Edition",
    shortName: "Red",
    labelPath: "/labels/bigshock-red.png",
    primaryColor: "#9d0012",
    secondaryColor: "#050505",
    accentColor: "#ff2b00",
    textColor: "#ffffff",
    description:
      "A high-impact red edition direction with stronger motion, darker contrast, and aggressive product energy.",
    textureOffset: [-0.25, 0],
  },
  {
    key: "blue",
    name: "Big Shock Blue Edition",
    shortName: "Blue",
    labelPath: "/labels/bigshock-blue.png",
    primaryColor: "#003b9c",
    secondaryColor: "#050505",
    accentColor: "#00a3ff",
    textColor: "#ffffff",
    description:
      "A colder electric-blue edition direction with a clean modern energy-drink presentation.",
    textureOffset: [-0.25, 0],
  },
] as const satisfies readonly BigShockProduct[];

export const typedBigShockProducts: readonly BigShockProduct[] = bigShockProducts;

export const defaultBigShockProductKey: BigShockProductKey = "original";

export const bigShockLabelPaths = Object.fromEntries(
  typedBigShockProducts.map((product) => [product.key, product.labelPath]),
) as Record<BigShockProductKey, string>;

export function getBigShockProduct(key: string | null | undefined) {
  return (
    typedBigShockProducts.find((product) => product.key === key) ??
    typedBigShockProducts[0]
  );
}
