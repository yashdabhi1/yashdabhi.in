import React from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = ({ darkModeToggle }) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { label: "About", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Blogs", path: "/blogs" },
  ];

  return (
    <motion.div>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "rgba(26, 26, 26, 0.1)" : "rgba(249, 249, 249, 0.1)",
          width: isMobile ? "calc(100% - 20px)" : "57%",
          margin: "0 auto",
          mt: "10px",
          borderRadius: "8px",
          overflow: "hidden",
          left: 0,
          right: 0
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: (theme) => theme.palette.text.primary,
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
              fontWeight: "bold",
            }}
            aria-label="Home"
          >
            Yash Dabhi
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={toggleDrawer}
                aria-label="Open navigation menu"
                sx={{ color: (theme) => theme.palette.text.primary }}
              >
                <MenuIcon
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem" },
                    color: (theme) => theme.palette.text.primary,
                  }}
                />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{
                  "& .MuiDrawer-paper": {
                    backdropFilter: "blur(5px)",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "rgba(26, 26, 26, 0.1)" : "rgba(249, 249, 249, 0.1)",
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? "0 4px 8px rgba(255, 255, 255, 0.2)"
                        : "0 0 10px rgba(0, 0, 0, 0.2)",
                    width: "100%",
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      pt: 2,
                      pb: 2,
                    }}
                    role="presentation"
                    onClick={toggleDrawer}
                  >
                    <List sx={{ width: "100%", textAlign: "center" }}>
                      {navItems.map(({ label, path }) => (
                        <ListItem
                          button
                          key={label}
                          component={RouterLink}
                          to={path}
                          sx={{ justifyContent: "center" }}
                          aria-label={`Navigate to ${label}`}
                        >
                          <ListItemText
                            primary={label}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: { xs: "1rem", sm: "1.2rem" },
                                color: (theme) => theme.palette.text.primary,
                                fontWeight: "medium",
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    {darkModeToggle}
                  </Box>
                </motion.div>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: { sm: 1, md: 2 } }}>
              {navItems.map(({ label, path }) => (
                <Button
                  key={label}
                  component={RouterLink}
                  to={path}
                  color="inherit"
                  sx={{
                    fontSize: { sm: "0.9rem", md: "1rem" },
                    color: (theme) => theme.palette.text.primary,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#333" : "rgb(116, 121, 139)",
                      boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                          ? "0 2px 4px rgba(255, 255, 255, 0.2)"
                          : "0 2px 4px rgba(151, 157, 177, 0.5)",
                      transform: "scale(1.05)",
                    },
                  }}
                  aria-label={`Navigate to ${label}`}
                >
                  {label}
                </Button>
              ))}
              {darkModeToggle}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;