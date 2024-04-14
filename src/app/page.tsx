'use client';
require('dotenv').config();

import { Navbar } from '@/components/navbar/navbar';
import Hero from '@/layouts/Hero';
import About from '@/layouts/About';
import Projects from '@/layouts/Project';
import Notes from '@/layouts/Notes';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Notes />
    </>
  );
}
