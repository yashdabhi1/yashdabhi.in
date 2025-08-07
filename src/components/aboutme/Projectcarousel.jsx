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
  height: { xs: "150px", sm: "180px", md: "200px" }, 
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
  backgroundColor: "#fff",
  color: "black",
  padding: theme.spacing(2),
  opacity: 0.7,
  "&.active": {
    opacity: 1,
  },
  "&:hover": {
    transform: "scale(1.02)", 
    transition: "transform 0.3s ease, opacity 0.5s ease-in-out",
  },
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
        px: { xs: 2, sm: 2, md: 3 }, 
      }}
    >
      <Card
        sx={{
          border: "1px solid #f0f0f0",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          width: { xs: "100%", md: "100%", lg: 1072 }, 
          maxWidth: "1200px", 
          margin: "0 auto", 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
      >
        <CardContent sx={{ padding: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
          <Typography
            variant="h4"
            sx={{
              color: "#000",
              marginBottom: { xs: "8px", sm: "10px", md: "12px" },
              display: "flex",
              alignItems: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, 
            }}
          >
            PROJECTS
          </Typography>
          <Card
            sx={{
              border: "1px solid #f0f0f0",
              backgroundColor: "rgb(158, 168, 193)",
              backdropFilter: "blur(10px)",
              width: "100%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
            }}
          >
            <CarouselContainer>
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className={index === currentIndex ? "active" : ""}
                  sx={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      textAlign: "center",
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 1,
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      transition:
                        "transform 0.2s ease, background-color 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        backgroundColor: "#1976d2",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
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