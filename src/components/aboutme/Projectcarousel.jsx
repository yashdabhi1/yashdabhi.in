import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Card, Button, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { HiLink } from "react-icons/hi2";

const CarouselContainer = styled(Box)(() => ({
  display: "flex",
  overflow: "hidden",
  width: "100%",
  position: "relative",
  borderRadius: "12px",
}));

const CarouselItem = styled(Box)(({ background }) => ({
  minWidth: "100%",
  height: "400px",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "12px",
  color: "#fff",
  padding: "30px",
  boxSizing: "border-box",
  position: "relative",
}));

const NavigationDots = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

const Dot = styled(Box)(({ active }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: active ? "#fff" : "rgba(255,255,255,0.5)",
  margin: "0 5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
}));

const ArrowButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#fff",
  background: "rgba(0,0,0,0.4)",
  "&:hover": { background: "rgba(0,0,0,0.6)" },
}));

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "News Integration",
      description:
        "LWC News Integration is a Lightning Web Component designed to dynamically fetch news articles from around the world using the NewsAPI.",
      link: "https://github.com/yashdabhi1/News-integration",
      image: "../P1.png",
    },
    {
      id: 2,
      title: "Quote Generator",
      description:
        "A dynamic Salesforce Lightning Web Component for generating quotes with product selection, quantity input, and PDF export functionality.",
      buttonText: "View Project",
      link: "https://github.com/yashdabhi1/Quote-Generator",
      image: "../P2.png",
    },
    {
      id: 3,
      title: "Google Drive Integration",
      description:
        "This project is a Salesforce implementation that integrates with Google Drive to manage folder creation and file uploads for Account records.",
      link: "https://github.com/yashdabhi1/Google-Drive-Integration",
      image: "../P3.png",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const handleDotClick = (index) => setCurrentIndex(index);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1165px",
        margin: "0 auto",
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CarouselContainer>
          <AnimatePresence mode="wait">
            {projects.map((project, index) =>
              index === currentIndex ? (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: "100%" }}
                >
                  <Card
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "#1a1a1a"
                          : "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                          ? "0 4px 12px rgba(255, 255, 255, 0.15)"
                          : "0 4px 12px rgba(0, 0, 0, 0.15)",
                      borderRadius: "12px",
                    }}
                  >
                    <CarouselItem
                      background={project.image}
                      sx={{ width: "100%" }}
                    >
                      <Box sx={{ zIndex: 1, justifyContent: "center" }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: "bold", mb: 1 }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mb: 2, maxWidth: "600px" }}
                        >
                          {project.description}
                        </Typography>
                        <Button
                          endIcon={<HiLink />}
                          variant="contained"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: "#fff",
                            borderRadius: "25px",
                            color: "#000",
                            "&:hover": { backgroundColor: "#fff" },
                          }}
                        >
                          {project.buttonText || "View Project"}
                        </Button>
                      </Box>
                    </CarouselItem>
                  </Card>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Left/Right Arrows */}
          <ArrowButton onClick={prevSlide} sx={{ left: "15px" }}>
            <ArrowBackIos />
          </ArrowButton>
          <ArrowButton onClick={nextSlide} sx={{ right: "15px" }}>
            <ArrowForwardIos />
          </ArrowButton>
        </CarouselContainer>

        {/* Navigation Dots */}
        <NavigationDots>
          {projects.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </NavigationDots>
      </motion.div>
    </Box>
  );
};

export default ProjectCarousel;
