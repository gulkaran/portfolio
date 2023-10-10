'use client';

import { NotesCard } from './NotesCard';
import image from "../../../public/images/linalg.png"
import { Link } from '@mui/material';

export const LinAlg = () => {

  const details = {
    title: "Linear Alegbra",
    img: image
  }

  return (
    <Link href="/files/linearalgebra_notes.pdf" underline="none" target="_blank" rel="noopener noreferrer">
      <NotesCard text={details} />
    </Link>
  )
}