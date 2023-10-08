'use client';

import { NotesCard } from './NotesCard';
import image from "../../../public/images/calc2.png"

export const Calc = () => {

  const details = {
    title: "Calculus II - Exam Notes",
    img: image
  }

  return (
    <a href="/files/calculus_notes.pdf" target="_blank" rel="noopener noreferrer">
      <NotesCard text={details} />
    </a>
  )
}