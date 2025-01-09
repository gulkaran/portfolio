"use client";

import { GridContainer } from "@/components/container/GridContainer";
import { Title } from "@/components/container/Title";
import { Calc } from "@/components/notes/Calc";
import { DSA } from "@/components/notes/DSA";
import { Stats } from "@/components/notes/Stats";
import { Discrete } from "@/components/notes/Discrete";
import { LinAlg } from "@/components/notes/LinAlg";
import { Stack, useTheme, useMediaQuery } from "@mui/material";

export default function Notes() {
  const details = {
    title: "NOTES",
    subtitle: "my notes",
    description: "come explore my cs degree",
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"), {
    defaultMatches: true,
  });
  const spacingValue = isMobile ? 4 : -4;

  return (
    <>
      <div id="notes">
        <Title text={details} />
        <Stack direction="column" spacing={spacingValue}>
          <GridContainer leftComponent={<Calc />} rightComponent={<DSA />} />
          <GridContainer
            leftComponent={<Discrete />}
            rightComponent={<LinAlg />}
          />
          <GridContainer leftComponent={<Stats />} rightComponent={<></>} />
        </Stack>
      </div>
    </>
  );
}
