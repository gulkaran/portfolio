'use client';

import { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Drawer } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const drawerWidth = 300;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <Box component='div' sx={{ display: 'flex' }}>
        <AppBar
          position='fixed'
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
          elevation={0}
        >
          <Toolbar>
            <IconButton
              color='primary'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component='nav'
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
          aria-label='mailbox folders'
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                bgcolor: 'primary',
              },
            }}
            elevation={0}
          >
            <Sidebar />
          </Drawer>
          <Drawer
            variant='permanent'
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            <Sidebar />
          </Drawer>
        </Box>
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            px: 5,
            mx: 5,
            pb: 5,
            mb: 5,
            width: { md: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          {children}
        </Box>
      </Box>
    </>
  );
}
