'use client';

import { GridContainer } from '@/components/container/GridContainer';
import { Container, Divider, Typography } from '@mui/material';
import { motion } from "framer-motion";
import Image from 'next/image';
import img from '../../../public/images/me.png';
import '@/styles/project.css'

export const AboutDetails = () => {

  const text = (
      <>
        <Typography variant="h5" component="h5" fontWeight={700} align="left">
          School
        </Typography>
        <Typography variant="h6" component="h6" align="left" sx={{mt: -2}}>
          <ul>
            <li>McMaster University - B.A.Sc in Computer Science & Minor in Business (3.9 GPA)</li>
            <li>I write all my notes in LaTeX, check them out!</li>
          </ul>
        </Typography>
        <Typography variant="h5" component="h5" fontWeight={700} align="left">
          Work Experience
        </Typography>
        <Typography variant="h6" component="h6" align="left"sx={{mt: -2}}>
          <ul>
            <li>Software Developer Intern @ Canada’s Wonderland (4 months)</li>
          </ul>
        </Typography>
        <Typography variant="h5" component="h5" fontWeight={700} align="left">
          Langauges/Technologies
        </Typography>
        <Typography variant="h6" component="h6" align="left" sx={{mt: -2}}>
          <ul>
            <li>Python, Javascript/Typescript (React JS), Java, C, C# (.NET), SQL, Firebase, Tensorflow, AutoCAD, LaTeX, & more!</li>
          </ul>
        </Typography>
        <Typography variant="h5" component="h5" fontWeight={700} align="left">
          Currently Listening To
        </Typography>
        <Typography variant="h6" component="h6" align="left"sx={{mt: -2}}>
          <ul>
            <li>Janurary 28th - J. Cole (via Spotify API)</li>
          </ul>
        </Typography>
      </>
  )

  const image = (
    <motion.div whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{scale: 1}} >
      <Container maxWidth="sm" sx={{mb: 5}}>
      <div style={{borderRadius: '100px', overflow: 'hidden'}}>
        <Image className="centerImg" 
                     style={{
                      width: '100%',
                      height: 'auto', 
                    }}
               objectFit='cover'
               src={img}
               alt="Image" />
      </div>
      </Container>
    </motion.div>
  );

  return (
    <GridContainer leftComponent={image} rightComponent={text} />
  )
}