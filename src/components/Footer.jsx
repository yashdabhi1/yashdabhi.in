import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 8, 
        py: { xs: 2, sm: 3, md: 4 }, 
        textAlign: 'center',
        width: '60%', // Full width on all screens
        margin: '0 auto'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on larger screens
            justifyContent: 'space-around', 
            alignItems: 'center', 
            mb: { xs: 1, sm: 2 }
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } // Responsive font size
            }}
          >
            Need a Skilled Salesforce Developer?
          </Typography>
          <Stack 
            direction="row" 
            spacing={{ xs: 1, sm: 2 }} 
            justifyContent="center"
          >
            <IconButton 
              href="https://github.com/yashdabhi1" 
              target="_blank" 
              color="inherit"
            >
              <GitHub sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' } }} />
            </IconButton>
            <IconButton 
              href="https://linkedin.com/in/yash-dabhi1" 
              target="_blank" 
              color="inherit"
            >
              <LinkedIn sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' } }} />
            </IconButton>
            <IconButton 
              href="mailto:dabhiyash11111@gmail.com" 
              color="inherit"
            >
              <Email sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' } }} />
            </IconButton>
          </Stack>
        </Box>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mt: { xs: 1, sm: 2 },
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } // Responsive font size
          }}
        >
          &copy; 2025 Yash Dabhi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;