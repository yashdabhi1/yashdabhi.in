import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          mb: { xs: 2, sm: 3, md: 4 },
          gap: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Card
          sx={{
            width: { xs: "100%", sm: "80%", md: 300, lg: 350 },
            height: { xs: 180, sm: 220, md: 280, lg: 350 },
            maxWidth: { xs: "100%", sm: 300, lg: 350 },
          }}
        >
          <CardMedia
            component="img"
            image="/YD.jfif"
            alt="Yash's profile image"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>
        <Card
          sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
            color: "black",
            width: { xs: "100%", sm: "90%", md: "auto" },
            maxWidth: { xs: "100%", sm: 500, md: 600 },
            height: { xs: "auto", sm: "auto", md: 300, lg: 350 },
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem", lg: "3rem" },
              }}
            >
              Hey, I'm Yash 👋
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "black",
                mb: 2,
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              }}
            >
              Salesforce Developer with several years of hands-on experience in
              designing and implementing scalable, secure, and user-centric
              solutions across Sales Cloud, Service Cloud, and custom Lightning
              applications.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "black",
                mb: 1,
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              }}
            >
              Proficient in Apex, Lightning Web Components (LWC), SOQL, and Flow
              Builder, with a strong understanding of Salesforce best practices,
              governor limits, and platform architecture.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Introduction;