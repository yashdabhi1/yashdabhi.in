import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { label: 'About', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blogs', path: '/blogs' },
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={1} 
      sx={{ 
        backdropFilter: 'blur(10px)',
        backgroundColor: 'transparent',
        width: isMobile ? 'calc(100% - 20px)' : '60%', 
        margin: '0 auto', 
        mt: '10px', 
        borderRadius: '8px',
        overflow: 'hidden', // Added to prevent overflow cutting off radius
        left: 0,
        right: 0,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'black',
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }
          }}
        >
          Yash Dabhi
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem' }, color: 'black' }} />
            </IconButton>
            <Drawer 
              anchor="top"
              open={drawerOpen} 
              onClose={toggleDrawer}
              sx={{
                '& .MuiDrawer-paper': {
                  backgroundColor: 'transparent',
                  backdropFilter: 'blur(10px)',
                  width: '100%',
                }
              }}
            >
              <Box 
                sx={{ 
                  width: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  pt: 2,
                  pb: 2
                }} 
                role="presentation" 
                onClick={toggleDrawer}
              >
                <List sx={{ width: '100%', textAlign: 'center' }}>
                  {navItems.map(({ label, path }) => (
                    <ListItem 
                      button 
                      key={label} 
                      component={RouterLink} 
                      to={path}
                      sx={{ justifyContent: 'center' }}
                    >
                      <ListItemText 
                        primary={label} 
                        sx={{ 
                          '& .MuiTypography-root': { 
                            fontSize: { xs: '1rem', sm: '1.2rem' },
                            color: 'black'
                          }
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: { sm: 1, md: 2 } }}>
            {navItems.map(({ label, path }) => (
              <Button 
                key={label} 
                component={RouterLink} 
                to={path} 
                color="inherit"
                sx={{ 
                  fontSize: { sm: '0.9rem', md: '1rem' },
                  color: 'black'
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;