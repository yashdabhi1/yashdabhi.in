import { Box, Card, CardContent, Typography, useTheme  } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const SkillMarquee = () => {
  const theme = useTheme();

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

  const SkillTag = ({ skill, index }) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{
        scale: 1.15,
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 0 15px rgba(255,255,255,0.3)"
            : "0 0 15px rgba(0,0,0,0.25)",
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
        margin: "0 12px",
        borderRadius: "12px",
        fontSize: "1rem",
        fontWeight: 600,
        cursor: "pointer",
        background: theme.palette.mode === "dark"
          ? "linear-gradient(135deg, #2d2d2d, #1a1a1a)"
          : "linear-gradient(135deg, #ffffff, #f3f3f3)",
        color: theme.palette.text.primary,
        border: `1px solid ${
          theme.palette.mode === "dark" ? "#444" : "#ddd"
        }`,
        transition: "all 0.3s ease",
      }}
    >
      {skill}
    </motion.span>
  );

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
        transition={{ duration: 0.6, ease: "easeOut" }}
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
                fontWeight: 700,
                color: theme.palette.text.primary,
                letterSpacing: "2px",
              }}
            >
              SKILLS
            </Typography>
            <Marquee
              pauseOnHover
              speed={40}
              gradient={false}
              style={{ padding: "20px 0" }}
              aria-label="Skills marquee moving right"
            >
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill} index={index} />
              ))}
            </Marquee>
            <Marquee
              pauseOnHover
              speed={40}
              gradient={false}
              direction="right"
              style={{ padding: "20px 0" }}
              aria-label="Skills marquee moving left"
            >
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill} index={index} />
              ))}
            </Marquee>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default SkillMarquee;
