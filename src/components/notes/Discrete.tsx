'use client';

import { Link } from "@mui/material";
import { NotesCard } from './NotesCard';
import image from "../../../public/images/discrete.png"

export const Discrete = () => {

  const details = {
    title: "Discrete Mathematics",
    img: image
  }

  return (
    <Link href="/files/discrete_notes.pdf" underline="none" target="_blank" rel="noopener noreferrer">
      <NotesCard text={details} />
    </Link>
  )
}