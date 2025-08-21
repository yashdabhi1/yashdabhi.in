import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "../../common/ProjectCard";

const projects = [
  {
    title: "News Integration",
    description:
      "LWC News Integration is a Lightning Web Component (LWC) designed to dynamically fetch and display news articles from around the world using the NewsAPI." ,
    image: "../P1.png",
    codeLink: "https://github.com/yashdabhi1/News-integration",
  },
  {
    title: "Quote Generator",
    description:
      "A dynamic Salesforce Lightning Web Component for generating quotes with product selection, quantity input, and PDF export functionality.",
    image: "../P2.png",
    codeLink: "https://github.com/yashdabhi1/Quote-Generator",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience with a modern design and responsive layout.",
    image: "../SF.jpg",
    codeLink: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, shopping cart, and payment integration.",
    image: "../SF.jpg",
    codeLink: "#",
  },
];

const ProjectComponent = () => {
  return (
    <Container
      sx={{
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            fontWeight: "bold",
            color: (theme) => theme.palette.text.primary,
            mb: 2,
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            color: (theme) => theme.palette.text.primary,
          }}
        >
          Here are some projects of which I'm really proud. Most of them are
          open-source, so feel free to check out the code and contribute if you're
          interested!
        </Typography>
      </motion.div>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            md={10}
            lg={8}
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              codeLink={project.codeLink}
            />
            {index === projects.length - 1 && (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center", mt: 4 }}
              >
                <Button
                  variant="contained"
                  href="https://github.com/yashdabhi1"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "8px 16px",
                    transition: "all 0.3s ease",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    "&:hover": {
                      backgroundColor: "#1565c0",
                      transform: "scale(1.05)",
                    },
                  }}
                  aria-label="Explore more projects on GitHub"
                >
                  Explore More Projects
                </Button>
              </Grid>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectComponent;