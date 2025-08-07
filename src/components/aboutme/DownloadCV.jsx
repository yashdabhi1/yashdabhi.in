import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";

function DownloadCV() {
  const handleDownload = () => {
    const cvUrl = "/Yash Dabhi.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Yashdabhi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card
      sx={{
        flex: 1,
        width: { xs: "100%", sm: "90%", md: 450, lg: 500 },
        minHeight: { xs: 250, sm: 280, md: 300, lg: 320 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            padding: 0,
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem", lg: "2.2rem" },
          }}
        >
          Get My Resume
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
          }}
        >
          Namaste! 🙏 Explore my professional journey! Download my CV to discover my skills, experience, and projects that showcase my expertise and passion.
        </Typography>
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              textTransform: "none",
              padding: { xs: "10px", sm: "12px", md: "14px" },
              width: "90%",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "rgb(153, 141, 137)",
                transform: "scale(1.02)",
              },
              "&:focus": {
                outline: "2px solid rgb(153, 141, 137)",
                outlineOffset: "2px",
              },
            }}
          >
            Download Resume
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DownloadCV;