import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  padding: theme.spacing(2),
}));

const CarouselItem = styled(Paper)(({ theme }) => ({
  minWidth: "100%",
  height: { xs: "180px", sm: "200px", md: "220px" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: (theme) =>
    theme.palette.mode === "dark" ? "#1a1a1a" : "#fff",
  color: (theme) => theme.palette.text.primary,
  padding: theme.spacing(3),
  borderRadius: "8px",
  boxShadow: (theme) =>
    theme.palette.mode === "dark"
      ? "0 4px 8px rgba(255, 255, 255, 0.1)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    transform: "scale(1.02)",
    transition: "transform 0.3s ease, opacity 0.3s ease-in-out",
    boxShadow: (theme) =>
      theme.palette.mode === "dark"
        ? "0 6px 12px rgba(255, 255, 255, 0.15)"
        : "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
}));

const NavigationDots = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

const Dot = styled(Box)(({ theme, active }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: active ? "#1976d2" : "#ccc",
  margin: theme.spacing(0, 0.5),
  cursor: "pointer",
  transition: "background-color 0.3s ease",
}));

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      id: 1,
      title: "News Integration",
      description:
        "LWC News Integration is a Lightning Web Component (LWC) designed to dynamically fetch and display news articles from around the world using the NewsAPI. ",
      buttonText: "View Project",
      link: "https://github.com/yashdabhi1/News-integration",
    },
    {
      id: 2,
      title: "Quote Generator",
      description: "A dynamic Salesforce Lightning Web Component for generating quotes with product selection, quantity input, and PDF export functionality.",
      buttonText: "View Project",
      link: "https://github.com/yashdabhi1/Quote-Generator",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, sm: 3, md: 4 },
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
              theme.palette.mode === "dark" ? "#1a1a1a" : "transparent",
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
          <CardContent sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
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
              PROJECTS
            </Typography>
            <Box sx={{ position: "relative" }}>
              <CarouselContainer>
                <AnimatePresence>
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{
                        opacity: index === currentIndex ? 1 : 0,
                        x: index === currentIndex ? 0 : 100,
                      }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{
                        position:
                          index === currentIndex ? "relative" : "absolute",
                        width: "100%",
                      }}
                    >
                      <CarouselItem
                        className={index === currentIndex ? "active" : ""}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: {
                              xs: "1.2rem",
                              sm: "1.4rem",
                              md: "1.6rem",
                            },
                            fontWeight: "bold",
                            mb: 1,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: {
                              xs: "0.9rem",
                              sm: "1rem",
                              md: "1.1rem",
                            },
                            textAlign: "center",
                            mb: 2,
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Button
                          variant="contained"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            mt: 1,
                            fontSize: {
                              xs: "0.9rem",
                              sm: "1rem",
                              md: "1.1rem",
                            },
                            backgroundColor: "#1976d2",
                            "&:hover": {
                              backgroundColor: "#1565c0",
                              transform: "scale(1.05)",
                              boxShadow: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "0 4px 8px rgba(255, 255, 255, 0.2)"
                                  : "0 4px 8px rgba(0, 0, 0, 0.2)",
                            },
                          }}
                          aria-label={`View ${project.title}`}
                        >
                          {project.buttonText}
                        </Button>
                      </CarouselItem>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </CarouselContainer>
              <NavigationDots>
                {projects.map((_, index) => (
                  <Dot
                    key={index}
                    active={index === currentIndex}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </NavigationDots>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ProjectCarousel;
