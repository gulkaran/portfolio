'use client';

import { Container, Typography, Grid } from '@mui/material';
import ThreeScene from '@/components/ThreeScene/ThreeScene';
import "@/styles/hero.css"
import VideoBackground from '@/components/VideoBackground';


export default function Hero() {

  return (
    <>

          <div className='video'>
            <VideoBackground />
          </div>

          <div className="threeContainer">
            <ThreeScene/>
          </div>
          
          <Grid container 
                spacing={0}
                direction="column" 
                justifyContent="center"
                sx={{ minHeight: '100vh'}}>
            <Grid item xs={6} sm={6}>
              <Container maxWidth="xl" className='pageText'>
                <Container sx={{ml: 5}}>
                  <Typography variant="h2" component="h2" align="left" color="secondary">
                    hi!
                  </Typography>
                  <Typography variant="h2" component="h2" align="left">
                    i&apos;m karan.
                  </Typography>
                  <Typography variant="h6" component="h6" align="left">
                    software engineer, computer science student, and innovator.
                  </Typography>
                </Container>
              </Container>
            </Grid>
            <Grid item xs={6} sm={6}>
              
            </Grid>
          </Grid>
    </>
  )
}
