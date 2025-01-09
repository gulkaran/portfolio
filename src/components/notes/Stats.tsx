"use client";

import { Link } from "@mui/material";
import { NotesCard } from "./NotesCard";
import image from "../../../public/images/stats.png";

export const Stats = () => {
  const details = {
    title: "Engineering Statistics",
    img: image,
  };

  return (
    <Link
      href="/files/stats_notes.pdf"
      underline="none"
      target="_blank"
      rel="noopener noreferrer"
    >
      <NotesCard text={details} />
    </Link>
  );
};
