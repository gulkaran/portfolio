'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { ResponsiveImage } from '../container/ResponsiveImage';
import img from '../../../public/images/yrcodes.png';

export const YRCodes = () => {
  const details = {
    title: 'YRCodes',
    techStack: 'javascript, html5, css3, google prettify',
    description:
      'launched an educational computer science learning platform for York Region (YRDSB) students; ultimately supported and endorsed by the YRDSB superintendent.',
    link: 'https://github.com/gulkaran/harishuthayakumargithub.github.io',
    buttonText: 'GitHub',
  };

  return (
    <GridContainer
      leftComponent={<ProjectDetails text={details} />}
      rightComponent={<ResponsiveImage image={img} />}
    />
  );
};
