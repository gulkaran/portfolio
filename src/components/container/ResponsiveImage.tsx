'use client';

import { Container } from '@mui/material';
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';

export const ResponsiveImage: React.FC<{ image: StaticImageData }> = ({ image }) => {

  return (
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
               src={ image }
               alt="Image" />
      </div>
      </Container>
    </motion.div>
  )
}