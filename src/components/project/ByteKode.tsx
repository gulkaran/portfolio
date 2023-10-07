'use client';

import { ProjectDetails } from '@/components/project/ProjectDetails';
import { GridContainer } from '@/components/container/GridContainer';
import { Container } from '@mui/material';
import { motion } from "framer-motion";
import Image from 'next/image';
import img from '../../../public/images/bytekode.png';
import '@/styles/project.css'

export const ByteKode = () => {

  const details = {
    title: "byteKode Hackathon",
    techStack: "devpost, javascript, html5, css3",
    description: "a non-profit organization which hosted two hackathon events with 200+ beginner programmers attendees looking to broaden their utilization of code.",
    github: "https://bytekodehackathon.devpost.com"
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