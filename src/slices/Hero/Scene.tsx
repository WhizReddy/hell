"use client";

import { useRef } from "react";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingCan from "@/components/FloatingCan";
import { useStore } from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {};

const HERO_SCALE = 0.84;
const PRODUCT_CLUSTER_SCALE = 0.9;

export default function Scene({}: Props) {
  const isReady = useStore((state) => state.isReady);

  const can1Ref = useRef<Group>(null);
  const can2Ref = useRef<Group>(null);
  const can3Ref = useRef<Group>(null);
  const can4Ref = useRef<Group>(null);
  const can5Ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    isReady();

    // Set can starting location
    gsap.set(groupRef.current.scale, {
      x: HERO_SCALE,
      y: HERO_SCALE,
      z: HERO_SCALE,
    });

    gsap.set(can1Ref.current.position, { x: -2.2 });
    gsap.set(can1Ref.current.rotation, { z: -0.5 });

    gsap.set(can2Ref.current.position, { x: 2.2 });
    gsap.set(can2Ref.current.rotation, { z: 0.5 });

    gsap.set(can3Ref.current.position, { y: 7, z: 2 });
    gsap.set(can4Ref.current.position, { x: 2.5, y: 7, z: 2 });
    gsap.set(can5Ref.current.position, { y: -7 });
    [can3Ref.current, can4Ref.current, can5Ref.current].forEach((can) => {
      gsap.set(can.scale, { x: 0.001, y: 0.001, z: 0.001 });
    });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    if (window.scrollY < 20) {
      introTl
        .from(can1GroupRef.current.position, { y: -5, x: 1 }, 0)
        .from(can1GroupRef.current.rotation, { z: 3 }, 0)
        .from(can2GroupRef.current.position, { y: 5, x: 1 }, 0)
        .from(can2GroupRef.current.rotation, { z: 3 }, 0);
    }

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    const heroHold = 1.05;
    const clusterStart = 4.8;

    scrollTl
      // Rotate can group
      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      // Can 1
      .to(can1Ref.current.position, { x: -0.2, y: -0.45, z: -2 }, heroHold)
      .to(can1Ref.current.rotation, { z: 0.3 }, heroHold)

      // Can 2
      .to(can2Ref.current.position, { x: 1, y: -0.05, z: -1 }, heroHold)
      .to(can2Ref.current.rotation, { z: 0 }, heroHold)

      // Can 3
      .to(
        can3Ref.current.position,
        { x: -0.3, y: 0.32, z: -1, duration: 1 },
        clusterStart,
      )
      .to(can3Ref.current.rotation, { z: -0.1, duration: 1 }, clusterStart)
      .to(
        can3Ref.current.scale,
        { x: 1, y: 1, z: 1, duration: 0.35 },
        clusterStart,
      )

      // Can 4
      .to(
        can4Ref.current.position,
        { x: 0, y: -0.15, z: 0.5, duration: 1 },
        clusterStart,
      )
      .to(can4Ref.current.rotation, { z: 0.3, duration: 1 }, clusterStart)
      .to(
        can4Ref.current.scale,
        { x: 1, y: 1, z: 1, duration: 0.35 },
        clusterStart,
      )

      // Can 5
      .to(
        can5Ref.current.position,
        { x: 0.3, y: 0.32, z: -0.5, duration: 1 },
        clusterStart,
      )
      .to(can5Ref.current.rotation, { z: -0.25, duration: 1 }, clusterStart)
      .to(
        can5Ref.current.scale,
        { x: 1, y: 1, z: 1, duration: 0.35 },
        clusterStart,
      )
      .to(
        groupRef.current.scale,
        {
          x: PRODUCT_CLUSTER_SCALE,
          y: PRODUCT_CLUSTER_SCALE,
          z: PRODUCT_CLUSTER_SCALE,
          duration: 1,
          ease: "sine.inOut",
        },
        clusterStart,
      )
      .to(
        groupRef.current.position,
        { x: 0.5, duration: 1.2, ease: "sine.inOut" },
        clusterStart,
      );
  });

  return (
    <group ref={groupRef} scale={HERO_SCALE}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          flavor="classic"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2Ref}
          flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <FloatingCan ref={can3Ref} flavor="redGrape" floatSpeed={FLOAT_SPEED} />

      <FloatingCan
        ref={can4Ref}
        flavor="caffeineFree"
        floatSpeed={FLOAT_SPEED}
      />

      <FloatingCan ref={can5Ref} flavor="apple" floatSpeed={FLOAT_SPEED} />

      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
