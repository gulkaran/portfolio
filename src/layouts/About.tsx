'use client';

import { Title } from "@/components/container/Title";
import { AboutDetails } from "@/components/about/AboutDetails";

export default function Project() {

  const details = {
    title: "ABOUT",
    subtitle: "about me",
    description: "i'm sort of interesting...",
  }

  return (
    <>
      <div id="about">
        <Title text={ details } />
        <AboutDetails />
      </div>
    </>
  )
}