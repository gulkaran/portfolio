'use client';

import { NotesCard } from './NotesCard';
import image from "../../../public/images/discrete.png"

export const Discrete = () => {

  const details = {
    title: "Discrete Mathematics",
    img: image
  }

  return (
    <a href="/files/discrete_notes.pdf" target="_blank" rel="noopener noreferrer">
      <NotesCard text={details} />
    </a>
  )
}