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
        flexDirection: "column",
        height: "100%",
        background: background,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.02)",
        },
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
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "#000" }}
        >
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: "#000" }}>
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
