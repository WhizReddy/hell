"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

import {
  bigShockLabelPaths,
  bigShockProducts,
  defaultBigShockProductKey,
  getBigShockProduct,
  type BigShockProductKey,
} from "@/config/bigShockProducts";

const CAN_MODEL_PATH = "/Soda-can.gltf";

useGLTF.preload(CAN_MODEL_PATH);
bigShockProducts.forEach((product) => useTexture.preload(product.labelPath));

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#c8c8c8",
});

const legacyFlavorMap: Record<string, BigShockProductKey> = {
  blackCherry: "original",
  lemonLime: "gold",
  grape: "blue",
  strawberryLemonade: "red",
  watermelon: "blue",
};

export type SodaCanFlavor = BigShockProductKey;

export type SodaCanProps = ComponentPropsWithoutRef<"group"> & {
  flavor?: BigShockProductKey | string | null;
  productKey?: BigShockProductKey;
  scale?: number;
};

function normalizeProductKey(
  flavor?: BigShockProductKey | string | null,
  productKey?: BigShockProductKey,
) {
  if (productKey) return productKey;
  if (!flavor) return defaultBigShockProductKey;
  return legacyFlavorMap[flavor] ?? getBigShockProduct(flavor).key;
}

export function SodaCan({
  flavor,
  productKey,
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF(CAN_MODEL_PATH);
  const labels = useTexture(bigShockLabelPaths);
  const selectedKey = normalizeProductKey(flavor, productKey);
  const selectedProduct = getBigShockProduct(selectedKey);

  Object.values(labels).forEach((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
  });

  const label = labels[selectedKey];
  const [offsetX, offsetY] = selectedProduct.textureOffset ?? [0, 0];
  const [repeatX, repeatY] = selectedProduct.textureRepeat ?? [1, 1];

  label.offset.set(offsetX, offsetY);
  label.repeat.set(repeatX, repeatY);
  label.rotation = selectedProduct.textureRotation ?? 0;

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
