'use client';

import { NotesCard } from './NotesCard';
import image from "../../../public/images/dsa.png"

export const DSA = () => {

  const details = {
    title: "Data Structures & Algorithms",
    img: image
  }

  return (
    <a href="/files/dsa_notes.pdf" target="_blank" rel="noopener noreferrer">
      <NotesCard text={details} />
    </a>
  )
}