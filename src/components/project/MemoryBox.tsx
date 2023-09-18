'use client';

import { ProjectTile } from '@/components/project/ProjectTile';
import { GridContainer } from '@/components/container/GridContainer';
import { Container } from '@mui/material';
import { motion } from "framer-motion";
import Image from 'next/image';
import img from '../../../public/images/memorybox.png';

export const MemoryBox = () => {

  const details = {
    title: "MemoryBox",
    techStack: "arduino, AutoCAD, Fusion360",
    description: "a memory box to hold up to 8 prerecorded messages for one's birthday or anniversary!",
    github: "https://github.com/gulkaran/MemoryBox"
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
        <Image width={img.width / 2.2 } height={img.height / 2.2} src={img} alt="Image" />
      </Container>
    </motion.div>
  );

  return (
    <GridContainer leftComponent={text} rightComponent={image} />
  )
}