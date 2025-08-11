import { Box, Card, CardContent, CardMedia, Typography,useMediaQuery  } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";

const Introduction = () => {
   const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px–768px

  let imageSrc = "/YD.jfif"; // default desktop image
  if (isMobile) {
    imageSrc = "/YD1.png";
  } else if (isTablet) {
    imageSrc = "/YD1.png";
  }

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "flex-start" },
        mb: { xs: 2, sm: 3, md: 4 },
        gap: { xs: 2, sm: 3, md: 3 },
        mt: { xs: 9, sm: 10, md: 10 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            width: { xs: "100%", sm: "80%", md: 300, lg: 350 },
            height: { xs: 180, sm: 220, md: 280, lg: 350 },
            maxWidth: { xs: "100%", sm: 300, lg: 350 },
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? "0 4px 8px rgba(255, 255, 255, 0.2)"
                : "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            image={imageSrc}
            alt="Yash's profile image"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1a1a1a" : "transparent",
            backdropFilter: "blur(10px)",
            color: (theme) => theme.palette.text.primary,
            width: { xs: "100%", sm: 500, md: 600, lg: 700 },
            height: { xs: "auto", sm: "auto", md: 300, lg: 350 },
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? "0 4px 8px rgba(255, 255, 255, 0.2)"
                : "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.8rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
              }}
            >
              Hey, I'm Yash 👋
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              }}
            >
              Salesforce Developer with several years of hands-on experience in
              designing and implementing scalable, secure, and user-centric
              solutions across Sales Cloud, Service Cloud, and custom Lightning
              applications.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              }}
            >
              Proficient in Apex, Lightning Web Components (LWC), SOQL, and Flow
              Builder, with a strong understanding of Salesforce best practices,
              governor limits, and platform architecture.
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Introduction;