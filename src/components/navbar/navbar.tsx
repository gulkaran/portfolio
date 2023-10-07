'use client';

import { Toolbar, AppBar, IconButton, Stack, Button, Typography, useTheme, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";

export const Navbar = () => {

  const download = () => {
    const link = document.createElement("a");
    link.download = `Gulkaran_Singh_Resume.pdf`;
    link.href = "/files/Gulkaran_Singh_Resume.pdf";
    link.click();
    link.remove();
  };

  // draw function to draw the logo on refresh!
  const draw = {
    hidden: { pathLength: 0, opacity: 0},
    visible: (i: number) => {
      const delay = 1 + i;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 10 },
          opacity: { delay, duration: 1 }
        }
      }
    }
  }


  return (
    <motion.div initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 30,
      delay: 0.6
    }}
    variants={{
      visible: { y : 0 },
      hidden: { y: "-100%"},
    }}
    >
      <AppBar position="fixed" sx={{ bgcolor: '#09090b' }}>
        <Toolbar>
          <IconButton size="large">
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
              <SvgIcon component={motion.div}
                        whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                        }}
                        whileTap={{scale: 0.9}}>
                <motion.svg initial="hidden" 
                            animate="visible"
                            viewBox="0 0 247 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path variants={draw} d="M123.5 83.5C113 66 84.0007 69.5 74.5004 83.5C65.0001 97.5 68.5003 114 74.5003 120.5C80.5003 127 81.9997 129.5 101.5 133.5C121 137.5 143 141.5 158 155.5C173 169.5 178.5 179 182.5 191C186.5 203 186.5 208.5 186.5 223" stroke="white" strokeWidth="25" strokeLinecap="round"/>
                  <motion.path variants={draw} d="M164 104H199M234 104H199M199 104C197.237 118.75 191.698 145.198 177.094 163" stroke="white" strokeWidth="25" strokeLinecap="round"/>
                  <motion.path variants={draw} d="M161 41C131.5 9.5 73.5001 -0.999998 36 41C-1.50008 83 12 137 36 161C60 185 100 182.345 117.5 192C135 201.655 137 217.5 126 231C115 244.5 93.5 246 93.5 246" stroke="white" strokeWidth="25" strokeLinecap="round"/>
                </motion.svg>
              </SvgIcon>
            </Link>
          </IconButton>
          <Typography component="div" sx={{flexGrow: 1}}/>
          <Stack direction="row" spacing={1.5}>
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
              <Button variant="text" 
                      color="inherit"
                      component={motion.div}
                      whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                      }}
                      whileTap={{scale: 0.9}}>
                        home
                        </Button></Link>

              <Link to="about" spy={true} smooth={true} offset={10} duration={500}>
                <Button variant="text" 
                      color="inherit"
                      component={motion.div}
                      whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                      }}
                      whileTap={{scale: 0.9}}>
                        about
                      </Button></Link>

              <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
                <Button variant="text" 
                      color="inherit"
                      component={motion.div}
                      whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                      }}
                      whileTap={{scale: 0.9}}>
                        projects
                      </Button></Link>

              <Link to="notes" spy={true} smooth={true} offset={0} duration={500}>
              <Button variant="text" 
                      color="inherit"
                      component={motion.div}
                      whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                      }}
                      whileTap={{scale: 0.9}}>notes</Button></Link>

              <Button variant="outlined" 
                      color="secondary"
                      onClick={download}
                      component={motion.div}
                      whileHover={{
                        scale: 1.15,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{scale: 0.9}}>resume</Button>
          </Stack>
        </Toolbar>
      </AppBar>

    </motion.div>
  )
}
