"use client";
import BackgroundOverlay from "@/components/common/backgroundOverlay";
import Footer from "@/components/common/footer";
import NavBar from "@/components/common/navBar";
import LandingPage from "@/components/home/landingPage";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const landingPageContent = {
    title: "Welcome to CampusConnect",
    description:
      "Discover exciting content, connect with others, and start your journey today. Sign in or register to begin exploring.",
    buttons: [
      { label: "Login", link: "/login", variant: "contained" },
      { label: "Register", link: "/register", variant: "outlined" },
    ] as const,
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <BackgroundOverlay />
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <LandingPage {...landingPageContent} />
      </Box>
      <Footer />
    </Box>
  );
}
