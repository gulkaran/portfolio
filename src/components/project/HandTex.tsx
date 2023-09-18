'use client';

import { ProjectTile } from '@/components/project/ProjectTile';
import { GridContainer } from '@/components/container/GridContainer';
import { Container } from '@mui/material';
import { motion } from "framer-motion";
import Image from 'next/image';
import img from '../../../public/images/handtex.png';

export const HandTex = () => {

  const details = {
    title: "HandTex",
    techStack: "react.js, python, tensorflow, openCV",
    description: "a convolutional neural network to convert handwritten mathematical expressions to LaTeX",
    github: "https://github.com/gulkaran/Handwritten-Math-To-Latex"
  }

  const text = (
      <ProjectTile text={details} />
  )

  const image = (
    <motion.div whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{scale: 1}} >
      <Container maxWidth="sm">
        <Image width={img.width / 1.3 } height={img.height} src={img} alt="Image" />
      </Container>
    </motion.div>
  );

  return (
    <GridContainer leftComponent={text} rightComponent={image} />
  )
}