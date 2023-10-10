'use client';

import { Title } from "@/components/container/Title";
import { AboutDetails } from "@/components/about/AboutDetails";
import { Socials } from "@/components/socials/Socials";

export default function About() {

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
        <Socials />
      </div>
    </>
  )
}