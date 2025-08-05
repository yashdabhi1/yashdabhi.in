import React from 'react';
import { Box } from '@mui/material';

const ThemeTransitionOverlay = ({ mode }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '3rem',
        left: '3rem',
        width: 0,
        height: 0,
        borderRadius: '50%',
        zIndex: 1500,
        animation: 'expandCircle 1s ease-in-out',
        bgcolor: mode === 'dark' ? '#fcfbfe' : '#111',
        transition: 'all 0.4s ease-in-out',
        '@keyframes expandCircle': {
          '0%': {
            width: 0,
            height: 0,
            clipPath: 'circle(0rem at center)',
          },
          '100%': {
            width: '500vmax',
            height: '500vmax',
            bottom: '-250vmax',
            left: '-250vmax',
            clipPath: 'circle(100% at center)',
          },
        },
      }}
    />
  );
};

export default ThemeTransitionOverlay;
