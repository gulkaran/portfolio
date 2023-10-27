import React, { ReactNode } from 'react';
import { Container, Grid } from '@mui/material';
import { motion } from "framer-motion";


export const LeftAlignContainer: React.FC<{ component: ReactNode }> = ({ component }) => {
  return (
    <>
      <Grid container 
            spacing={0}
            direction="column" 
            justifyContent="center"
            sx={{ minHeight: '100vh', maxWidth: '50vw'}}>
        <Grid item xs={6} sm={6}>
          <Container maxWidth="xl">
            <motion.div initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 30,
                          delay: 0.6,
                        }}>
              <Container sx={{ml: 5}}>
                { component }
              </Container>
            </motion.div>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

