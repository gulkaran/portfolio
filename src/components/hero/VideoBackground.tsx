import React from 'react';
import { Container } from '@mui/material';

export const VideoBackground = () => {

  return (
      <video autoPlay loop muted>
        <source src="/stars.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
};