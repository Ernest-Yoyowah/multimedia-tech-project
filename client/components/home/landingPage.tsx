"use client";

import { Box, Typography } from "@mui/material";
import CustomButton from "../common/customButton";

interface ButtonData {
  label: string;
  link: string;
  variant?: "contained" | "outlined";
}

interface LandingPageProps {
  title: string;
  description: string;
  buttons: readonly ButtonData[];
}

export default function LandingPage({
  title,
  description,
  buttons,
}: LandingPageProps) {
  return (
    <Box
      sx={{
        textAlign: "center",
        zIndex: 2,
        mx: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "3.5rem", md: "4rem" },
          letterSpacing: "-1px",
          color: "white",
          my: 3,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          lineHeight: 1.5,
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 4,
        }}
      >
        {buttons.map(({ label, link, variant }, index) => (
          <CustomButton
            key={index}
            label={label}
            link={link}
            variant={variant}
          />
        ))}
      </Box>
    </Box>
  );
}
