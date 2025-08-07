import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DownloadCV from "./DownloadCV";
import ExperienceItem from "../../common/ExperienceItem";
import { motion } from "framer-motion";

function Workexperience() {
  const experiences = [
    {
      image: <img src="/Kiva.png" alt="Kiva Infotech" loading="lazy" />,
      company: "Kiva Infotech",
      title: "Salesforce Developer",
      date: "Nov 2024 - Present",
    },
    {
      image: <img src="/Kiva.png" alt="Kiva Infotech" loading="lazy" />,
      company: "Kiva Infotech",
      title: "Salesforce Intern",
      date: "Jan 2024 - Oct 2024",
    },
    {
      image: (
        <img src="/TDSolution.png" alt="Techdata Solution" loading="lazy" />
      ),
      company: "Techdata Solution",
      title: "Data Science Intern",
      date: "June 2022 - Dec 2022",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: { xs: 2, sm: 3, md: 3 },
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur(10px)",
              color: "black",
              flex: 1,
              width: { xs: "100%", sm: "90%", md: 450, lg: 500 },
              minHeight: { xs: 250, sm: 280, md: 300, lg: 320 },
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "black",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.8rem",
                    md: "2rem",
                    lg: "2.2rem",
                  },
                }}
              >
                Work Experience
              </Typography>
            </CardContent>
            <CardContent>
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  image={exp.image}
                  company={exp.company}
                  title={exp.title}
                  date={exp.date}
                />
              ))}
            </CardContent>
          </Card>
          <DownloadCV />
        </Box>
      </motion.div>
    </Box>
  );
}

export default Workexperience;
