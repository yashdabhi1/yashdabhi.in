import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const SkillMarquee = () => {
  const skills = [
    "Salesforce",
    "Apex",
    "LWC",
    "Administration",
    "Flow",
    "SOQL",
    "Workflows",
    "APIs",
    "CPQ",
    "Visualforce",
    "Git",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, sm: 4, md: 5 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "#1a1a1a"
                : "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            width: { xs: "100%", md: "100%", lg: 1072 },
            maxWidth: "1200px",
            margin: "0 auto",
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? "0 4px 12px rgba(255, 255, 255, 0.15)"
                : "0 4px 12px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
          }}
        >
          <CardContent sx={{ padding: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: (theme) => theme.palette.text.primary,
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.8rem",
                  md: "2rem",
                  lg: "2.2rem",
                },
              }}
            >
              SKILLS
            </Typography>
            <Marquee
              pauseOnHover={true}
              speed={50}
              direction="right"
              gradient={false}
              style={{
                width: "100%",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
              aria-label="Skills marquee moving right"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#333" : "#fff",
                    color: (theme) => theme.palette.text.primary,
                    padding: "8px 16px",
                    margin: "0 10px",
                    borderRadius: "20px",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    fontWeight: "500",
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? "0 2px 4px rgba(255, 255, 255, 0.1)"
                        : "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "#e6dbc7" }}
                >
                  {skill}
                </motion.span>
              ))}
            </Marquee>
            <Marquee
              pauseOnHover={true}
              speed={50}
              direction="left"
              gradient={false}
              style={{
                width: "100%",
                marginTop: "15px",
                paddingBottom: "10px",
              }}
              aria-label="Skills marquee moving left"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#333" : "#fff",
                    color: (theme) => theme.palette.text.primary,
                    padding: "8px 16px",
                    margin: "0 10px",
                    borderRadius: "20px",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    fontWeight: "500",
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? "0 2px 4px rgba(255, 255, 255, 0.1)"
                        : "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "#e6dbc7" }}
                >
                  {skill}
                </motion.span>
              ))}
            </Marquee>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default SkillMarquee;
