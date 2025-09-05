import { Box, Button, Card, CardContent, Typography ,useTheme } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
const MotionButton = motion(Button);


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

  const theme = useTheme();

  return (
    <Card
      sx={{
        flex: 1,
        width: { xs: "100%", sm: "90%", md: 450, lg: 500 },
        minHeight: { xs: 250, sm: 280, md: 300, lg: 320 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 4px 8px rgba(255, 255, 255, 0.2)"
            : "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1a1a1a" : "transparent",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            padding: 0,
            fontSize: {
              xs: "1.5rem",
              sm: "1.8rem",
              md: "2rem",
              lg: "2.2rem",
            },
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
          Hello! 🙏 Explore my professional journey! Download my CV to discover
          my skills, experience, and projects that showcase my expertise and
          passion.
        </Typography>
        <Box sx={{ textAlign: "center", mt: 5 }}>
          {/* <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "rgb(234, 234, 234)" : "rgb(0, 0, 0)",
              color: (theme) =>
                theme.palette.mode === "dark" ? "#000" : "#fff",
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              textTransform: "none",
              padding: { xs: "10px", sm: "12px", md: "14px" },
              width: "90%",
              borderRadius: "8px",
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? "0 4px 10px rgba(255, 255, 255, 0.2)"
                  : "0 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor:"rgb(153, 141, 137)",
                transform: "scale(1.02)",
              },
              "&:focus": {
                outline: "2px solid rgb(153, 141, 137)",
                outlineOffset: "2px",
              },
            }}
          >
            Download Resume
          </Button> */}
          <MotionButton
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(110deg, #fff 45%, #e4e4e7 55%, #fff)"
                  : "linear-gradient(110deg, #000 45%, #333 55%, #000)",
              backgroundSize: "200% 100%",
              animation: "shine 5s linear infinite",
              color: "text.primary",
              border: "1px solid",
              borderRadius: "8px",
              borderColor: "divider",
              "&:hover": {
                borderColor: "divider",
              },
              "@keyframes shine": {
                "0%": { backgroundPosition: "200% 0" },
                "100%": { backgroundPosition: "-200% 0" },
              },
            }}
          >
            Download Resume
          </MotionButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default DownloadCV;