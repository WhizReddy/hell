export type GoldenEagleProductKey =
  | "original"
  | "zeroCaffeine"
  | "coffeeEdition"
  | "redEdition"
  | "sugarFree"
  | "tropicalEdition";

export type GoldenEagleProduct = {
  key: GoldenEagleProductKey;
  name: string;
  shortName: string;
  labelPath: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  description: string;
};

export const goldenEagleProducts = [
  {
    key: "original",
    name: "Original",
    shortName: "Original",
    labelPath: "/labels/golden-original.png",
    primaryColor: "#0b3f91",
    secondaryColor: "#f4d131",
    accentColor: "#e31b23",
    textColor: "#ffffff",
    description:
      "The classic Golden Eagle identity with blue, yellow, and red can design.",
  },
  {
    key: "zeroCaffeine",
    name: "0% Caffeine & Taurine",
    shortName: "0% Caffeine",
    labelPath: "/labels/golden-zero-caffeine.png",
    primaryColor: "#004fc4",
    secondaryColor: "#f4d131",
    accentColor: "#ffffff",
    textColor: "#ffffff",
    description:
      "A blue caffeine-free and taurine-free variant with a focused product identity.",
  },
  {
    key: "coffeeEdition",
    name: "Coffee Edition",
    shortName: "Coffee",
    labelPath: "/labels/golden-gold-edition.png",
    primaryColor: "#090806",
    secondaryColor: "#c59a32",
    accentColor: "#f5d36b",
    textColor: "#ffffff",
    description: "A darker coffee-inspired edition with black and gold styling.",
  },
  {
    key: "redEdition",
    name: "Red Edition",
    shortName: "Red",
    labelPath: "/labels/golden-red-edition.png",
    primaryColor: "#b90013",
    secondaryColor: "#ffffff",
    accentColor: "#ff2a2a",
    textColor: "#ffffff",
    description:
      "A bold red variant with strong visual impact and shelf presence.",
  },
  {
    key: "sugarFree",
    name: "Sugar Free",
    shortName: "Sugar Free",
    labelPath: "/labels/golden-sugar-free.png",
    primaryColor: "#f1e4a3",
    secondaryColor: "#ffffff",
    accentColor: "#173c8f",
    textColor: "#173c8f",
    description:
      "A lighter sugar-free variant with white, yellow, and blue styling.",
  },
  {
    key: "tropicalEdition",
    name: "Tropical Edition",
    shortName: "Tropical",
    labelPath: "/labels/golden-tropical-edition.png",
    primaryColor: "#f4c400",
    secondaryColor: "#ffffff",
    accentColor: "#e8291c",
    textColor: "#ffffff",
    description:
      "A bright tropical edition with warm yellow tones and vibrant flavour direction.",
  },
] as const satisfies readonly GoldenEagleProduct[];

export const defaultGoldenEagleProductKey: GoldenEagleProductKey = "original";

export const goldenEagleLabelPaths = Object.fromEntries(
  goldenEagleProducts.map((product) => [product.key, product.labelPath]),
) as Record<GoldenEagleProductKey, string>;

export function getGoldenEagleProduct(key: string | null | undefined) {
  return (
    goldenEagleProducts.find((product) => product.key === key) ??
    goldenEagleProducts[0]
  );
}
