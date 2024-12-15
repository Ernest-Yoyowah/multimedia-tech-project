"use client";

import LoginForm from "@/components/auth/loginForm";
import BackgroundOverlay from "@/components/common/backgroundOverlay";
import NavBar from "@/components/common/navBar";
import { Box, Typography, Container } from "@mui/material";
import { useEffect, useState } from "react";

export default function Login() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <BackgroundOverlay />
      <NavBar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 2,
          color: "white",
          marginTop: { md: 16, xs: 20 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3.5rem", md: "4rem" },
            letterSpacing: "-1px",
            color: "white",
            my: 2,
          }}
        >
          Welcome Back
        </Typography>
        <Box sx={{ my: { md: 0, xs: 2 } }}>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "1rem", sm: "1.2rem" },
              lineHeight: 1.5,
              maxWidth: "600px",
              margin: "20px auto",
            }}
          >
            Please sign in to continue and explore more on Campus Connect.
          </Typography>
        </Box>
        <LoginForm />
      </Container>
    </Box>
  );
}
