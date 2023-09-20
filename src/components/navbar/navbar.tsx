'use client';

import { Toolbar, AppBar, IconButton, Stack, Button, Typography, useTheme } from "@mui/material";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { motion } from "framer-motion";

export const Navbar = () => {

  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;

  const download = () => {
    const link = document.createElement("a");
    link.download = `Gulkaran_Singh_Resume.pdf`;
    link.href = "/files/Gulkaran_Singh_Resume.pdf";
    link.click();
    link.remove();
  };

  return (
    <motion.div initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 30,
      delay: 0.6
    }}>
    <AppBar sx={{ bgcolor: 'black' }}>
      <Toolbar>
        <IconButton size="small">
          <FingerprintIcon fontSize="large" aria-label="logo"/>
        </IconButton>
        <Typography component="div" sx={{flexGrow: 1}}/>
        <Stack direction="row" spacing={1.5}>
          <Button variant="text" color="inherit">home</Button>
          <Button variant="text" color="inherit">about</Button>
          <Button variant="text" color="inherit">projects</Button>
          <Button variant="text" 
                  color="inherit"
                  component={motion.div}
                  whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                  }}
                  whileTap={{scale: 0.9}}>notes</Button>
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
