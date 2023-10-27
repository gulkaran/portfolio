'use client';

import { LegoScene } from '@/components/hero/LegoScene';
import { VideoBackground } from '@/components/hero/VideoBackground';
import { HeroText } from '@/components/hero/HeroText';
import { LeftAlignContainer } from '@/components/container/LeftAlignContainer';
import { Swipe } from '@mui/icons-material';
import { motion } from 'framer-motion';
import "@/styles/hero.css"


export default function Hero() {

  return (
    <>
      <div id="/">
        <div className='video'>
          <VideoBackground />
        </div>

        <div className="threeContainer">
          <LegoScene />
        </div>
        
        <LeftAlignContainer component={HeroText} />
        
        <motion.div initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 30,
                          delay: 0.6,
                        }}>
          <motion.div animate={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 30,
                          delay: 0.6,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}>
            <Swipe fontSize="large" className="centered" sx={{zIndex: 2}} />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
