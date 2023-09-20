'use client';

import { Stack } from "@mui/material"
import { HandTex } from "@/components/project/HandTex";
import { MemoryBox } from "@/components/project/MemoryBox";
import { ProjectTitle } from "@/components/project/ProjectTitle";

export default function Project() {

  return (
    <>
      <ProjectTitle />
      <Stack direction="column" spacing={10}>
        <HandTex />
        <MemoryBox />
      </Stack>
    </>
  )
}