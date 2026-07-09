"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

import {
  defaultHellProductKey,
  getHellProduct,
  hellLabelPaths,
  hellProducts,
  type HellProductKey,
} from "@/config/hellProducts";

const CAN_MODEL_PATH = "/Soda-can.gltf";

useGLTF.preload(CAN_MODEL_PATH);
hellProducts.forEach((product) => useTexture.preload(product.labelPath));

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#c8c8c8",
});

const legacyFlavorMap: Record<string, HellProductKey> = {
  blackCherry: "classic",
  lemonLime: "zero",
  grape: "redGrape",
  strawberryLemonade: "apple",
  watermelon: "focus",
  original: "classic",
  zeroSugar: "zero",
  gold: "classic",
  red: "redGrape",
  blue: "focus",
};

export type SodaCanFlavor = HellProductKey;

export type SodaCanProps = ComponentPropsWithoutRef<"group"> & {
  flavor?: HellProductKey | string | null;
  productKey?: HellProductKey;
  scale?: number;
};

function normalizeProductKey(
  flavor?: HellProductKey | string | null,
  productKey?: HellProductKey,
) {
  if (productKey) return productKey;
  if (!flavor) return defaultHellProductKey;
  return legacyFlavorMap[flavor] ?? getHellProduct(flavor).key;
}

export function SodaCan({
  flavor,
  productKey,
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF(CAN_MODEL_PATH);
  const labels = useTexture(hellLabelPaths);
  const selectedKey = normalizeProductKey(flavor, productKey);
  const selectedProduct = getHellProduct(selectedKey);

  Object.values(labels).forEach((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
  });

  const label = labels[selectedKey];

  label.offset.set(
    selectedProduct.textureOffsetX,
    selectedProduct.textureOffsetY,
  );
  label.repeat.set(
    selectedProduct.textureRepeatX,
    selectedProduct.textureRepeatY,
  );
  label.rotation = selectedProduct.textureRotation;

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
