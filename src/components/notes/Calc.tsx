'use client';

import { Link } from "@mui/material";
import { NotesCard } from './NotesCard';
import image from "../../../public/images/calc2.png"

export const Calc = () => {

  const details = {
    title: "Calculus II - Exam Notes",
    img: image
  }

  return (
    <Link href="/files/calculus_notes.pdf" underline="none" target="_blank" rel="noopener noreferrer">
      <NotesCard text={details} />
    </Link>
  )
}