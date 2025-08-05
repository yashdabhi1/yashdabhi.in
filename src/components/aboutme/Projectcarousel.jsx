import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Card,
  Button,
  CardContent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  width: "100%",
  position: "relative",
}));

const CarouselItem = styled(Paper)(({ theme }) => ({
  minWidth: "100%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.5s ease-in-out",
  backgroundColor: "#fff",
  color: "Black",
  padding: theme.spacing(2),
}));

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      id: 1,
      title: "Custom App Development",
      description:
        "Developed a custom Salesforce app to streamline business processes and improve efficiency.",
      buttonText: "View Project",
    },
    {
      id: 2,
      title: "Another Project",
      description: "Description for another project goes here.",
      buttonText: "View Project",
    },
    {
      id: 3,
      title: "Third Project",
      description: "Description for the third project goes here.",
      buttonText: "View Project",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

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
            PROJECTS
          </Typography>
          <Card
            sx={{
              border: "1px solid #f0f0f0",
              backgroundColor: "rgb(97, 90, 90)",
              backdropFilter: "blur(10px)",
              width: "100%",
              boxShadow: "none",
              borderRadius: "10px",
            }}
          >
            <CarouselContainer >
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  sx={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <Button variant="contained" sx={{ mt: 2 }}>
                    {project.buttonText}
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContainer>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectCarousel;
