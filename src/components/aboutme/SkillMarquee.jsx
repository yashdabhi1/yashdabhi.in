import { Box, Typography, useTheme } from "@mui/material";
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
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #2d2d2d, #1a1a1a)"
            : "linear-gradient(135deg, #ffffff, #f3f3f3)",
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.mode === "dark" ? "#444" : "#ddd"}`,
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
        maxWidth: "1072px",
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        mb: 3,
        py: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: theme.palette.text.primary,
          letterSpacing: "2px",
          textAlign: "center",
          mt: 3,
          mb: 3,
        }}
      >
        SKILLS
      </Typography>

      {/* Marquee with overlays */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
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

        {/* Gradient overlays ON TOP of the marquee */}
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            width: "60px",
            height: "100%",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(to right, #1a1a1a, transparent)"
                : "linear-gradient(to right, #ffffff, transparent)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            right: 0,
            width: "60px",
            height: "100%",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(to left, #1a1a1a, transparent)"
                : "linear-gradient(to left, #ffffff, transparent)",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
};

export default SkillMarquee;
