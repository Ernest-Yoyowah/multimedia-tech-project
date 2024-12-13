"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 16,
        width: "100%",
        zIndex: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
        © 2024 Campus Connect. Empowering Students Everywhere.
      </Typography>
    </Box>
  );
}
