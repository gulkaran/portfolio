'use client';

import { LegoScene } from '@/components/hero/LegoScene';
import { VideoBackground } from '@/components/hero/VideoBackground';
import { HeroText } from '@/components/hero/HeroText';
import { LeftAlignContainer } from '@/components/container/LeftAlignContainer';
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
      </div>
    </>
  )
}
