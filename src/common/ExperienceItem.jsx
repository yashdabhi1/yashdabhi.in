import React from "react";
import { Box, Typography } from "@mui/material";

const ExperienceItem = ({ image, company, title, date }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
         // bgcolor: "grey.800",
          borderRadius: 1,
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: 2,
          overflow: "hidden", // Ensure image fits within the box
        }}
      >
        {image}
      </Box>
      <Box>
        <Typography variant="h6">{company}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceItem;