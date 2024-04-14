'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { ResponsiveImage } from '../container/ResponsiveImage';
import img from '../../../public/images/memorybox.png';

export const MemoryBox = () => {
  const details = {
    title: 'MemoryBox',
    techStack: 'arduino, AutoCAD, Fusion360',
    description:
      "a memory box to hold up to 8 prerecorded messages for one's birthday or anniversary!",
    link: 'https://github.com/gulkaran/MemoryBox',
    buttonText: 'GitHub',
  };

  return (
    <GridContainer
      leftComponent={<ProjectDetails text={details} />}
      rightComponent={<ResponsiveImage image={img} />}
    />
  );
};
