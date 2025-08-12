import React from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, sm: 7, md: 8 },
        py: { xs: 3, sm: 4, md: 5 },
        textAlign: "center",
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "#1a1a1a"
            : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-around",
              alignItems: "center",
              mb: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                fontWeight: "bold",
                color: (theme) => theme.palette.text.primary,
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
                rel="noopener noreferrer"
                component={motion.a}
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                aria-label="Visit GitHub profile"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  //"&:hover": { color: "rgb(0, 0, 0)" },
                  "&:hover":(theme) => ({
                    color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                  }),
                }}
              >
                <GitHub
                  sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" } }}
                />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/yash-dabhi1"
                target="_blank"
                rel="noopener noreferrer"
                component={motion.a}
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                aria-label="Visit LinkedIn profile"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  "&:hover":(theme) => ({
                    color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                  }),
                }}
              >
                <LinkedIn
                  sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" } }}
                />
              </IconButton>
              <IconButton
                href="mailto:dabhiyash11111@gmail.com"
                component={motion.a}
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                aria-label="Send email"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  "&:hover":(theme) => ({
                    color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                  }),
                }}
              >
                <Email
                  sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" } }}
                />
              </IconButton>
            </Stack>
          </Box>
          <Typography
            variant="body1"
            sx={{
              mt: { xs: 2, sm: 3 },
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              color: (theme) => theme.palette.text.primary,
            }}
          >
            &copy; 2025 Yash Dabhi. All rights reserved. Made with ❤️ for the
            Salesforce community.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
