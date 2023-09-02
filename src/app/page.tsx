'use client';

import { Container, Typography } from '@mui/material';
import ThreeScene from '@/components/ThreeScene/ThreeScene';
import "@/styles/page.css"

export default function Home() {

  return (
    <>
        <Container maxWidth={false}>

          <div className="threeContainer">
            <ThreeScene/>
          </div>
          
          <Container maxWidth="md" className='pageText'>
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
    </>
  )
}
