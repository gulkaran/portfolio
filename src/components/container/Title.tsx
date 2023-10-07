'use client';

import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material"
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import "@/styles/project.css"

interface TextProp {
  text: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const Title: React.FC<TextProp> = ({ text }) => {

  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true
  });

  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["0 1", "2 1"], // starts when bottom of the view port (0) hits (1) the top of the target
  });

  return (
    <>
      <motion.div ref={ref} 
                  style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress }}>
        <Stack direction="column" spacing={0}>
          <Typography variant="h1" component="h1" align="center" color={backgroundColor} className="outlined" sx={{mt: 10}}>{ text.title }</Typography>
          <Stack direction="column" spacing={0}>
            <Typography variant="h2" component="h2" align="center" color="secondary" sx={{mt: isMobile ? -6 : -12}}>{ text.subtitle }</Typography>
            <Typography variant="h5" component="h5" align="center" color="primary" sx={{mb: 10}} >{ text.description }</Typography>
          </Stack>
        </Stack>
      </motion.div>
    </>
  )
}