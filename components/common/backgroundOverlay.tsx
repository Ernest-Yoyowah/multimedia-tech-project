import { Box } from "@mui/material";

export default function BackgroundOverlay() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/landing1.jpg')", // Add the background image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1, // Ensure it stays behind content
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay color
        },
      }}
    />
  );
}
