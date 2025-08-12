import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Grid,
} from "@mui/material";

const ProjectCard = ({ title, description, image, codeLink }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "100%", md: "1100px", lg: "1086px" },
        borderRadius: "16px",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1a1a1a" : "rgb(255, 255, 255)",
        color: (theme) => theme.palette.text.primary,
        overflow: "hidden",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 0 10px rgba(255, 255, 255, 0.2)"
            : "0 0 10px rgba(119, 102, 102, 0.5)",
        margin: "auto",
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", md: 220 },
            height: { xs: 200, md: "100%" },
            objectFit: "cover",
            borderRadius: { xs: "0", md: "12px" },
          }}
          image={image}
          alt={title}
        />
      </CardContent>

      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ flexGrow: 1, px: { xs: 2, md: 1 }, py: { xs: 1.5, md: 2 } }}
      >
        <CardContent sx={{ paddingBottom: "8px !important" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            href={codeLink}
            variant="contained"
            sx={{
              backgroundColor: "#e6dbc7",
              color: "#000",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#d5cbb8" },
            }}
          >
            🛠 View Code
          </Button>
        </CardActions>
      </Grid>
    </Card>
  );
};

export default ProjectCard;