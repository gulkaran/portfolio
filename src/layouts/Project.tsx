'use client';

import { Stack } from "@mui/material"
import { HandTex } from "@/components/project/HandTex";
import { MemoryBox } from "@/components/project/MemoryBox";

export default function Project() {

  return (
    <>
      <Stack direction="column" spacing={15}>
        <HandTex />
        <MemoryBox />
      </Stack>
    </>
  )
}