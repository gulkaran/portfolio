'use client';

import { ThemeProvider, createTheme, ThemeOptions, Typography, CssBaseline } from '@mui/material';
import React from 'react';
import { DM_Sans, Dela_Gothic_One, Work_Sans } from 'next/font/google'
import { createBreakpoints } from "@mui/system";
const breakpoints = createBreakpoints({});

const dM_Sans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ['latin']
})

const dela_Gothic_One = Dela_Gothic_One({
  weight: ["400"],
  subsets: ['latin']
})

const work_Sans = Work_Sans({
  weight: ["700"],
  subsets: ['latin']
})

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#8D8D8D',
    },
    secondary: {
      main: '#FFC700',
    },
    background: {
      default: '#1E1E1E',
      paper: '#1E1E1E',
    },
    text: {
      secondary: '#8D8D8D',
    },
  },
  typography: {
    h1: {
      fontFamily: dela_Gothic_One.style.fontFamily,
      fontSize: '140pt',
    },
    h2: {
      fontFamily: work_Sans.style.fontFamily,
      fontSize: '96pt',
      fontWeight: 700,
      [breakpoints.down("md")]: {
        fontSize: '64pt'
      }
    },
    h6: {
      fontFamily: dM_Sans.style.fontFamily,
      fontSize: '18pt',
      fontWeight: 500,
      [breakpoints.down("sm")]: {
        fontSize: '14pt'
      }
    },
    button: {
      fontFamily: dM_Sans.style.fontFamily,
      fontSize: '13pt',
      fontWeight: 500,
      textTransform: 'none',
      [breakpoints.down("sm")]: {
        fontSize: '10pt'
      }
    },
  },
  shape: {
    borderRadius: 25,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      }
    },
  }
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}