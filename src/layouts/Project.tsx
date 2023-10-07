'use client';

import { Stack } from "@mui/material"
import { Title } from "@/components/container/Title";
import { HandTex } from "@/components/project/HandTex";
import { MemoryBox } from "@/components/project/MemoryBox";
import { ByteKode } from "@/components/project/ByteKode";
import { YRCodes } from "@/components/project/YRCodes";

export default function Project() {

  const details = {
    title: "PROJECTS",
    subtitle: "my projects",
    description: "where i really let my creativity shine",
  }

  return (
    <>
      <div id="projects">
      <Title text={ details } />
      <Stack direction="column" spacing={10}>
        <HandTex />
        <ByteKode />
        <YRCodes />
        <MemoryBox />
      </Stack>
      </div>
    </>
  )
}