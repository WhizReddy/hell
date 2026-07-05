"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

import {
  defaultGoldenEagleProductKey,
  getGoldenEagleProduct,
  goldenEagleLabelPaths,
  goldenEagleProducts,
  type GoldenEagleProductKey,
} from "@/config/goldenEagleProducts";

const CAN_MODEL_PATH = "/Soda-can.gltf";

useGLTF.preload(CAN_MODEL_PATH);
goldenEagleProducts.forEach((product) => useTexture.preload(product.labelPath));

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#c8c8c8",
});

const legacyFlavorMap: Record<string, GoldenEagleProductKey> = {
  blackCherry: "original",
  lemonLime: "zeroCaffeine",
  grape: "coffeeEdition",
  strawberryLemonade: "redEdition",
  watermelon: "tropicalEdition",
};

export type SodaCanFlavor = GoldenEagleProductKey;

export type SodaCanProps = ComponentPropsWithoutRef<"group"> & {
  flavor?: GoldenEagleProductKey | string | null;
  productKey?: GoldenEagleProductKey;
  scale?: number;
};

function normalizeProductKey(
  flavor?: GoldenEagleProductKey | string | null,
  productKey?: GoldenEagleProductKey,
) {
  if (productKey) return productKey;
  if (!flavor) return defaultGoldenEagleProductKey;
  return legacyFlavorMap[flavor] ?? getGoldenEagleProduct(flavor).key;
}

export function SodaCan({
  flavor,
  productKey,
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF(CAN_MODEL_PATH);
  const labels = useTexture(goldenEagleLabelPaths);
  const selectedKey = normalizeProductKey(flavor, productKey);

  Object.values(labels).forEach((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.offset.x = 0.25;
  });

  const label = labels[selectedKey];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial roughness={0.18} metalness={0.65} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}
