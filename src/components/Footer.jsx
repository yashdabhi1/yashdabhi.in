import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 8, 
        py: 4, 
        backgroundColor: 'transparent', 
        textAlign: 'center',
        width: '60%',
        margin: '0 auto'
      }}
    >
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" gutterBottom>
            Need a Skilled Salesforce Developer?
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton href="https://github.com/yashdabhi1" target="_blank" color="inherit">
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton href="https://linkedin.com/in/yash-dabhi1" target="_blank" color="inherit">
              <LinkedIn fontSize="large"/>
            </IconButton>
            <IconButton href="mailto:dabhiyash11111@gmail.com" color="inherit">
              <Email fontSize="large"/>
            </IconButton>
          </Stack>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          &copy; 2025 Yash Dabhi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;