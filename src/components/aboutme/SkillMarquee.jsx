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
            border: "1px solid #f0f0f0",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            width: { xs: "100%", md: "100%", lg: 1072 },
            maxWidth: "1200px",
            margin: "0 auto",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
          }}
        >
          <CardContent sx={{ padding: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="h4"
              sx={{
                color: "#000",
                marginBottom: "16px",
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                fontWeight: "bold",
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
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "8px 16px",
                    margin: "0 10px",
                    borderRadius: "20px",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    fontWeight: "500",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "8px 16px",
                    margin: "0 10px",
                    borderRadius: "20px",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    fontWeight: "500",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
