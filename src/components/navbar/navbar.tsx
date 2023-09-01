import { Toolbar, AppBar, IconButton, Stack, Button, Typography, Grid } from "@mui/material"
import FingerprintIcon from '@mui/icons-material/Fingerprint';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="small">
          <FingerprintIcon fontSize="large" aria-label="logo"/>
        </IconButton>
        <Typography component="div" sx={{flexGrow: 1}}/>
        <Stack direction="row" spacing={1}>
          <Button variant="text" color="inherit">home</Button>
          <Button variant="text" color="inherit">about</Button>
          <Button variant="text" color="inherit">projects</Button>
          <Button variant="text" color="inherit">blog</Button>
          <Button variant="contained" color="primary">resume</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
