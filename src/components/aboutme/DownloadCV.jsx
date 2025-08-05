import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";

function DownloadCV() {
  const handleDownload = () => {
    const cvUrl = "/Yash Dabhi.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Yashdabhi_CV.pdf";
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
          MY STUDIO
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
          Namaste! 🙏 Abhivarde.in is more than a portfolio; it's a window into
          my world, where passion meets purpose. Discover my work.
        </Typography>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{
              backgroundColor: "#ff4500",
              color: "#fff",
              "&:hover": { backgroundColor: "#e03a00" },
              width: { xs: "80%", sm: "60%", md: "50%" },
              margin: "0 auto",
            }}
          >
            Download CV
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DownloadCV;