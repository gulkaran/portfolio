import React from 'react';
import { Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';
import "@/styles/notes.css"

interface TextProp {
  text: {
    title: string;
    img: StaticImageData;
  };
}

export const NotesCard: React.FC<TextProp> = ({ text }) => {

  return (
    <motion.div whileHover={{
      scale: 1.1,
      transition: { duration: 0.3 }
    }}
    whileTap={{scale: 1}} >
      <div style={{borderRadius: '35px', overflow: 'hidden', border: '3px solid #FFC700'}}>
        <Stack direction="column">
          <Image className="overlayImg" 
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                src={text.img}
                alt="Image" />
            <Typography className="overlay" variant="h3" component="h3" align="left" color="secondary"
                    sx={{mt: -8, mb: 2, ml: 2}}>
              { text.title }
            </Typography>
          </Stack>
        </div>
    </motion.div>
  )
}