"use client";

import { forwardRef, useMemo, type ComponentPropsWithoutRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Clone, useGLTF } from "@react-three/drei";
import type { Group } from "three";

import { brandConfig } from "@/config/brandConfig";

useGLTF.preload(brandConfig.modelPath);

export type ProductModelProps = ComponentPropsWithoutRef<"group"> & {
  modelPath?: string;
  scale?: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
};

export const ProductModel = forwardRef<Group, ProductModelProps>(
  (
    {
      modelPath = brandConfig.modelPath,
      scale = 2,
      autoRotate = true,
      rotationSpeed = 0.35,
      ...props
    },
    ref,
  ) => {
    const gltf = useGLTF(modelPath);
    const object = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

    useFrame((_, delta) => {
      if (!autoRotate || !object) return;
      object.rotation.y += delta * rotationSpeed;
    });

    return (
      <group ref={ref} {...props} dispose={null} scale={scale}>
        <Clone object={object} />
      </group>
    );
  },
);

ProductModel.displayName = "ProductModel";
