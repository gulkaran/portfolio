'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { ResponsiveImage } from '../container/ResponsiveImage';
import img from '../../../public/images/leetcode.png';

export const LeetCode = () => {
  const details = {
    title: 'Markdown Documentation',
    techStack: 'AWS (S3, DynamoDB, Lambda), Next 13',
    description:
      'a markdown powered documentation style website to showcase completed LeetCode problems.',
    link: 'https://gulkaran.ca/leetcode',
    buttonText: 'View Demo',
  };

  return (
    <GridContainer
      leftComponent={<ProjectDetails text={details} />}
      rightComponent={<ResponsiveImage image={img} />}
    />
  );
};
