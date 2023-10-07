'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { Container } from '@mui/material';
import { motion } from "framer-motion";
import Image from 'next/image';
import img from '../../../public/images/handtex.png';
import '@/styles/project.css'

export const HandTex = () => {

  const details = {
    title: "HandTex",
    techStack: "react.js, python, tensorflow, openCV",
    description: "a convolutional neural network to convert handwritten mathematical expressions to LaTeX using AI image detection",
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
      <div style={{borderRadius: '35px', overflow: 'hidden'}}>
        <Image className="centerImg" 
                     style={{
                      width: '100%',
                      height: 'auto',
                    }}
               src={img}
               alt="Image" />
      </div>
      </Container>
    </motion.div>
  );

  return (
    <GridContainer leftComponent={text} rightComponent={image} />
  )
}