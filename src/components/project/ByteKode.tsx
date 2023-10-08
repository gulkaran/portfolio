'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { ResponsiveImage } from '../container/ResponsiveImage';
import img from '../../../public/images/bytekode.png';

export const ByteKode = () => {

  const details = {
    title: "byteKode Hackathon",
    techStack: "devpost, javascript, html5, css3",
    description: "a non-profit organization which hosted two hackathon events with 200+ beginner programmers attendees looking to broaden their utilization of code.",
    github: "https://bytekodehackathon.devpost.com"
  }

  return (
    <GridContainer leftComponent={<ProjectDetails text={details} />} rightComponent={<ResponsiveImage image={img} />} />
  )
}