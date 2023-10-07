import React from 'react';
import { Button, Typography, Link } from "@mui/material";
import { Divider } from '@mui/material';
import { motion } from "framer-motion";

interface TextProp {
  text: {
    title: string;
    techStack: string;
    description: string;
    github: string;
  };
}

export const ProjectDetails: React.FC<TextProp> = ({ text }) => {
  return (
    <>
      <Typography variant="h4" component="h4" align="left" color="secondary">
        { text.title }
      </Typography>
      <Typography variant="h6" component="h6" align="left" sx={{pb: 2, pt: 1}}>
        { text.techStack }
      </Typography>
      <Divider sx={{mb:2}} />
      <Typography variant="h5" component="h5" align="left" color="textSecondary" sx={{lineHeight: 1.2, pb: 2}}>
        { text.description }
      </Typography>

      <Link href={ text.github } underline="none" target="_blank" rel="noopener noreferrer">
        <Button variant="outlined" 
                color="secondary"
                component={motion.div}
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 }
                }}
                whileTap={{scale: 0.9}}
                sx={{mb: 5}}>view github</Button>
      </Link>
    </>
  )
}