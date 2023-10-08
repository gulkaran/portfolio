'use client';

import { NotesCard } from './NotesCard';
import image from "../../../public/images/linalg.png"

export const LinAlg = () => {

  const details = {
    title: "Linear Alegbra",
    img: image
  }

  return (
    <a href="/files/linearalgebra_notes.pdf" target="_blank" rel="noopener noreferrer">
      <NotesCard text={details} />
    </a>
  )
}