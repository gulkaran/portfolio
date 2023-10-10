'use client';

import { Link } from '@mui/material';
import { NotesCard } from './NotesCard';
import image from "../../../public/images/dsa.png"


export const DSA = () => {

  const details = {
    title: "Data Structures & Algorithms",
    img: image
  }

  return (
    <Link href="/files/dsa_notes.pdf" underline="none" target="_blank" rel="noopener noreferrer">
      <NotesCard text={details} />
    </Link>
  )
}