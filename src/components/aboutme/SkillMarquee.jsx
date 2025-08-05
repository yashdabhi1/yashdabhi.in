import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

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
    "Git"
  ];

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Card
        sx={{
          border: "1px solid #f0f0f0",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          width: "100%",
          boxShadow: "none",
          borderRadius: "10px",
        }}
      >
        <CardContent sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
            variant="h4"
            sx={{
              color: "#000",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            SKILLS
          </Typography>
          <Marquee
            pauseOnHover={true}
            speed={50}
            direction="right"
            gradient={false}
            style={{ width: "100%", paddingTop: "15px", paddingBottom: "15px" }}
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  color: "#000",
                  padding: "8px 16px",
                  margin: "0 10px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "500",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {skill}
              </span>
            ))}
          </Marquee>
          <Marquee
            pauseOnHover={true}
            speed={50}
            direction="left"
            gradient={false}
            style={{ width: "100%", marginTop: "15px", paddingBottom: "10px" }}
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  color: "#000",
                  padding: "8px 16px",
                  margin: "0 10px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "500",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {skill}
              </span>
            ))}
          </Marquee>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SkillMarquee;
