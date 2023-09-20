'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { Container } from '@mui/material';
import { motion } from "framer-motion";
import Image from 'next/image';
import img from '../../../public/images/handtex.png';
import '@styles/project.css'

export const HandTex = () => {

  const details = {
    title: "HandTex",
    techStack: "react.js, python, tensorflow, openCV",
    description: "a convolutional neural network to convert handwritten mathematical expressions to LaTeX",
    github: "https://github.com/gulkaran/Handwritten-Math-To-Latex"
  }

  const text = (
      <ProjectDetails text={details} />
  )

  const image = (
    <motion.div whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{scale: 1}} >
      <Container maxWidth="sm">
        <Image className="centerImg" width={ 438 } height={ 329 } src={img} alt="Image" />
      </Container>
    </motion.div>
  );

  return (
    <GridContainer leftComponent={text} rightComponent={image} />
  )
}