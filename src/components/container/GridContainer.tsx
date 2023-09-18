import React, { ReactNode } from 'react';
import { Container, Grid, ThemeProvider, useTheme } from '@mui/material';
import { motion } from "framer-motion";


export const GridContainer: React.FC<{ rightComponent: ReactNode, 
                                       leftComponent: ReactNode }> = ({ rightComponent, leftComponent }) => {


  return (
    <>
      <Grid container 
            spacing={0} // Adjust spacing for smaller screens
            direction='row'
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '70vh'}}>

        <Grid item md={12} lg={6}>
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
        
        <Grid item md={12} lg={6}>
          <Container maxWidth="xl">
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
    </>
  )
}

