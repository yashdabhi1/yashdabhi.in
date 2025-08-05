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
      color="transparent" 
      elevation={1} 
      sx={{ 
        backdropFilter: 'blur(10px)',
        width: '60%',
        margin: '0 auto',
        mt: '10px',
        borderRadius: '8px',
        left: 0,
        right: 0
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          Yash Dabhi
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer}>
                <List>
                  {navItems.map(({ label, path }) => (
                    <ListItem button key={label} component={RouterLink} to={path}>
                      <ListItemText primary={label} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map(({ label, path }) => (
              <Button key={label} component={RouterLink} to={path} color="inherit">
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