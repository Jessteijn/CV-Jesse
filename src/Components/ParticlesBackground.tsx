"use client";
import { type Container } from "@tsparticles/engine";
import { loadFirePreset } from "@tsparticles/preset-fire";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadFirePreset(engine); // Load the fire preset
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      preset: "fire",
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="-z-1 fixed left-0 top-0 h-full w-full"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
