import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../../common/ProjectCard";

const projects = [
  {
    title: "Idea Tracker",
    description:
      "A React + Appwrite app to save, search, and manage side project ideas. Features auth, real-time updates, and a clean UI with Tailwind & Framer Motion.",
    image: "../SF.jpg",
    codeLink: "#",
  },
  {
    title: "Librarium",
    description:
      "A full-stack solution with Google and Discord login, powerful search, and complete CRUD operations for seamless book management.",
    image: "../SF.jpg",
    codeLink: "#",
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
        padding: 1,
      }}
    >
      <Typography variant="h4">Projects</Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Here are some projects of which I'm really proud. Most of them are
        open-source, so feel free to check out the code and contribute if you're
        interested!
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={10} lg={8} key={index}>
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
                sx={{ display: "flex", justifyContent: "center", mt: 3 }}
              >
                <Button
                  variant="contained"
                  href="https://github.com/yashdabhi1"
                  sx={{
                    backgroundColor: "#e6dbc7",
                    color: "#000",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "8px 16px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#d5cbb8",
                      transform: "scale(1.05)",
                    },
                  }}
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
