import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const BlogPost = ({ title, date, image, background, link }) => {
  const handleCardClick = () => {
    window.location.href = link;
  };
  return (
    <Card
      onClick={handleCardClick}
      sx={{
        display: "flex",

        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
        background: (theme) =>
          theme.palette.mode === "dark" ? "#1a1a1a" : background,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 4px 8px rgba(255, 255, 255, 0.2)"
            : "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        "&:hover": { transform: "scale(1.02)" },
        width: "100%",
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: { xs: 150, sm: 200 },
            objectFit: "cover",
            borderRadius: "16px 16px 0 0",
          }}
        />
      </CardContent>

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="caption">{date}</Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
