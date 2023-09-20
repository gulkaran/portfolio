import React, { ReactNode, useRef } from 'react';
import { Container, Grid  } from '@mui/material';
import { motion, useScroll, useTransform } from "framer-motion";


export const GridContainer: React.FC<{ rightComponent: ReactNode, 
                                       leftComponent: ReactNode }> = ({ rightComponent, leftComponent }) => {

  
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["0 1", "1 1"], // starts when bottom of the view port (0) hits (1) the top of the target
  });

  const scaleProgess = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <>
      <motion.div ref={ref} 
                  style={{
                    scale: scaleProgess,
                    opacity: opacityProgess }}>
        <Grid container 
              spacing={0} // Adjust spacing for smaller screens
              direction='row'
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: '50vh'}}>
            <Grid item md={12} lg={3}>
              <Container maxWidth="sm">
                <motion.div initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 30,
                              delay: 0.6
                            }}>
                    { leftComponent }
                </motion.div>
              </Container>
            </Grid>
            
            <Grid item md={12} lg={3}>
              <Container maxWidth="sm">
                <motion.div initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 30,
                              delay: 0.6
                            }}>
                    { rightComponent }
                </motion.div>
              </Container>
            </Grid>
        </Grid>
      </motion.div>
    </>
  )
}

