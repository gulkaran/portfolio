'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { ResponsiveImage } from '../container/ResponsiveImage';
import img from '../../../public/images/spiderman.png';

export const Spiderman = () => {
  const details = {
    title: 'Spiderman Minecraft Mod',
    techStack: 'Java, Fabric, Gradle',
    description:
      'a custom Minecraft mod that implements new loot tables, spiderman armour, new blocks, and more!',
    link: 'https://github.com/gulkaran/Spiderman-Minecraft-Mod',
    buttonText: 'GitHub',
  };

  return (
    <GridContainer
      leftComponent={<ProjectDetails text={details} />}
      rightComponent={<ResponsiveImage image={img} />}
    />
  );
};
