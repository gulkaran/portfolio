'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { Container } from '@mui/material';
import { motion } from "framer-motion";
import Image from 'next/image';
import img from '../../../public/images/yrcodes.png';
import '@/styles/project.css'

export const YRCodes = () => {

  const details = {
    title: "YRCodes",
    techStack: "javascript, html5, css3, google prettify",
    description: "launched an educational computer science learning platform for York Region (YRDSB) students; ultimately supported and endorsed by the YRDSB superintendent.",
    github: "https://github.com/gulkaran/harishuthayakumargithub.github.io"
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