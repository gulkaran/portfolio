import { Typography, Stack, IconButton, Container, Link } from "@mui/material";
import { MailOutline, LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from "framer-motion";

export const Socials = () => {

  return (
    <>
      <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
        delay: 0.6
      }}
        >
        <Typography variant="h5" component="h5" align="center" color="primary" fontWeight={700} sx={{mt: 5}} >Connect With Me!</Typography>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Stack direction="row" spacing={4} sx={{mt: 3}}>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gulkaransingh.m@gmail.com&su=&body=Hello Gulkaran!" underline="none" target="_blank" rel="noopener noreferrer">
              <IconButton 
                component={motion.div}
                whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
                }}
                whileTap={{scale: 0.9}}>
                <MailOutline fontSize="large"/>
              </IconButton>
            </Link>

            <Link href="https://www.linkedin.com/in/gulkaran/" underline="none" target="_blank" rel="noopener noreferrer">
              <IconButton
                component={motion.div}
                whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
                }}
                whileTap={{scale: 0.9}}>
                <LinkedIn fontSize="large" />
              </IconButton>
            </Link>

            <Link href="https://www.github.com/gulkaran" underline="none" target="_blank" rel="noopener noreferrer">
              <IconButton
                component={motion.div}
                whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
                }}
                whileTap={{scale: 0.9}}>
                <GitHub fontSize="large" />
              </IconButton>
            </Link>
          </Stack>
        </Container>
      </motion.div>
    </>
  )
}