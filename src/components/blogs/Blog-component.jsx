import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import BlogPost from "../../common/BlogPost";

const blogPosts = [
  {
    title:
      "10 Mistakes Every Salesforce Beginner Makes and How to Avoid Them(Even I Have Also Made These…",
    date: "Published on Jul 09, 2025",
    image: "../B1.webp",
    background: "linear-gradient(135deg,rgb(255, 255, 255))",
    link: "https://medium.com/@yashdabhi/top-10-mistakes-every-salesforce-beginner-makes-and-how-to-avoid-them-1c40fa133206",
  },
  {
    title:
      "Salesforce and External Systems Integration: A Developer’s Case Study🌐",
    date: "Published on Jul 7, 2023",
    image: "../B2.webp",
    background: "linear-gradient(135deg,rgb(255, 255, 255))",
    link: "https://medium.com/@yashdabhi/salesforce-and-external-systems-integration-a-developers-case-study-e4d835212fb6",
  },
  {
    title:
      "Solving a Salesforce Data Migration Challenge: A Developer’s Journey 🚀",
    date: "Published on Jul 05, 2025",
    image: "../B3.webp",
    background: "linear-gradient(135deg,rgb(255, 255, 255))",
    link: "https://medium.com/@yashdabhi/solving-a-salesforce-data-migration-challenge-a-developers-journey-8e13936cadba",
  },
  {
    title: "Salesforce Industry-Specific Clouds: Tailored Solutions for 2025",
    date: "Published on Jul 4, 2023",
    image: "../B4.webp",
    background: "linear-gradient(135deg,rgb(255, 255, 255))",
    link: "https://medium.com/@yashdabhi/salesforce-industry-specific-clouds-tailored-solutions-for-2025-664e640eeae3",
  },
  {
    title:
      "Salesforce 2025: How Autonomous AI Agents Are Revolutionizing CRM Like Never Before!",
    date: "Published on Jul 3, 2023",
    image: "../B5.webp",
    background: "linear-gradient(135deg,rgb(255, 255, 255))",
    link: "https://medium.com/@yashdabhi/salesforce-2025-how-autonomous-ai-agents-are-revolutionizing-crm-like-never-before-62657a70b9bc",
  },
  {
    title:
      "Optimizing Salesforce Reports and Dashboards: A Step-by-Step Guide for Admins and Analysts 2025",
    date: "Published on Jul 3, 2023",
    image: "../B6.webp",
    background: "linear-gradient(135deg,rgb(255, 255, 255))",
    link: "https://medium.com/@yashdabhi/optimizing-salesforce-reports-and-dashboards-a-step-by-step-guide-for-admins-and-analysts-2025-1f376d8b0c7c",
  },
];

const BlogComponent = () => {
  return (
    <Container
      sx={{
        py: 4,
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "16px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#000", fontWeight: "bold" }}
      >
        Blog Posts
      </Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        Check out my latest blog posts where I share insights, tips, and
        experiences. Feel free to drop by, read, and leave your thoughts in the
        comments!
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ width: { sm: "48%" } }}>
            <BlogPost
              title={post.title}
              date={post.date}
              image={post.image}
              background={post.background}
              link={post.link}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          href="https://medium.com/@yashdabhi"
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
        >
          📚 Explore More Blogs
        </Button>
      </Box>
    </Container>
  );
};

export default BlogComponent;
