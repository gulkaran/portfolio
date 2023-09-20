'use client';

import { Stack, Typography, useTheme } from "@mui/material"
import { motion, useScroll } from "framer-motion";
import "@/styles/project.css"
import { useRef } from "react";


export const ProjectTitle = () => {

  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;

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
          <Typography variant="h1" component="h1" align="center" color={backgroundColor} className="outlined" sx={{mt: 10}}>PROJECTS</Typography>
          <Stack direction="column" spacing={0}>
            <Typography variant="h2" component="h2" align="center" color="secondary" sx={{mt: -12}}>my projects</Typography>
            <Typography variant="h6" component="h6" align="center" color="primary" sx={{mb: 10}} >where i really let my creativity shine</Typography>
          </Stack>
        </Stack>
      </motion.div>
    </>
  )
}