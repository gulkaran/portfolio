'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { ResponsiveImage } from '../container/ResponsiveImage';
import img from '../../../public/images/handtex.png';

export const HandTex = () => {
  const details = {
    title: 'HandTex',
    techStack: 'react.js, python, tensorflow, openCV',
    description:
      'a convolutional neural network to convert handwritten mathematical expressions to LaTeX using AI image detection',
    link: 'https://github.com/gulkaran/Handwritten-Math-To-Latex',
    buttonText: 'GitHub',
  };

  return (
    <GridContainer
      leftComponent={<ProjectDetails text={details} />}
      rightComponent={<ResponsiveImage image={img} />}
    />
  );
};
