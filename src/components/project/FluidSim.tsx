"use client";

import { ProjectDetails } from "@/components/project/ProjectDetails";
import { GridContainer } from "@/components/container/GridContainer";
import { ResponsiveImage } from "../container/ResponsiveImage";
import img from "../../../public/images/fluidsim.gif";

export const FluidSim = () => {
  const details = {
    title: "Fluid Simulation",
    techStack: "rust, bevy",
    description:
      "a particle-based fluid simulation with density estimation, pressure forces, spatial grid optimizations and elastic collisions.",
    link: "https://github.com/gulkaran/fluid-simulation",
    buttonText: "GitHub",
  };

  return (
    <GridContainer
      leftComponent={<ProjectDetails text={details} />}
      rightComponent={<ResponsiveImage image={img} />}
    />
  );
};
