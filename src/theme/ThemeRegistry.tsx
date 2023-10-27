'use client';

import { ThemeProvider, createTheme, ThemeOptions, Typography, CssBaseline } from '@mui/material';
import React from 'react';
import { DM_Sans, Dela_Gothic_One, Work_Sans } from 'next/font/google'
import { createBreakpoints } from "@mui/system";
const breakpoints = createBreakpoints({});

const dM_Sans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
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
      default: '#111010',
      paper: '#111010',
    },
    text: {
      secondary: '#8D8D8D',
    },
  },
  typography: {
    h1: {
      fontFamily: dela_Gothic_One.style.fontFamily,
      fontSize: '100pt',
      [breakpoints.down("md")]: {
        fontSize: '60pt'
      },
      [breakpoints.down("sm")]: {
        fontSize: '46pt'
      }
    },
    h2: {
      fontFamily: dM_Sans.style.fontFamily,
      fontSize: '64pt',
      fontWeight: 600,
      [breakpoints.down("md")]: {
        fontSize: '52pt'
      },
      [breakpoints.down("sm")]: {
        fontSize: '28pt'
      }
    },
    h3: {
      fontFamily: dM_Sans.style.fontFamily,
      fontSize: '20pt',
      fontWeight: 600,
      [breakpoints.down("md")]: {
        fontSize: '18pt'
      },
      [breakpoints.down("sm")]: {
        fontSize: '16pt'
      }
    },
    h4: {
      fontFamily: dM_Sans.style.fontFamily,
      fontSize: '36pt',
      fontWeight: 500,
      [breakpoints.down("md")]: {
        fontSize: '28pt'
      }
    },
    h5: {
      fontFamily: dM_Sans.style.fontFamily,
      fontSize: '16pt',
      fontWeight: 300,
      [breakpoints.down("md")]: {
        fontSize: '12pt'
      }
    },
    h6: {
      fontFamily: dM_Sans.style.fontFamily,
      fontSize: '14pt',
      fontWeight: 300,
      [breakpoints.down("md")]: {
        fontSize: '12pt'
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
        color: "transparent",
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