"use client";
import Image from "next/image";
import { Button, Box, Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "url('/landing1.jpg')", // High-quality background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: 0,
        position: "relative",
      }}
    >
      {/* Overlay for darkening the background image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Top Left: Logo */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: { md: 30, xs: 0 },
          zIndex: 2,
        }}
      >
        <Image
          src="/logo2.png"
          alt="Campus Connect Logo"
          width={300}
          height={100}
        />
      </Box>

      {/* Top Right: Button or other element */}
      <Box
        sx={{
          position: "absolute",
          top: { md: 16, xs: 24 },
          right: { md: 30, xs: 1 },
          zIndex: 2,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          href="/about"
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            color: "white",
            borderColor: "white",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "white",
              color: "#E50914",
              borderColor: "#E50914",
            },
          }}
        >
          About Us
        </Button>
      </Box>

      {/* Main Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          padding: "0 16px",
          maxWidth: "lg",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
            letterSpacing: "-1px",
            color: "white",
          }}
        >
          Welcome to Campus Connect
        </Typography>

        <Box sx={{ my: 3 }}>
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
            Discover exciting content, connect with others, and start your
            journey today. Sign in or register to begin exploring.
          </Typography>
        </Box>

        {/* Flex Container for Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            marginTop: 4,
          }}
        >
          <Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/login"
              sx={{
                width: "200px",
                padding: "16px 32px",
                fontSize: "1.2rem",
                borderRadius: "50px",
                textTransform: "none",
                backgroundColor: "#E50914",
                "&:hover": {
                  backgroundColor: "#F40612",
                },
              }}
            >
              Login
            </Button>
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="/register"
              sx={{
                width: "200px",
                padding: "16px 32px",
                fontSize: "1.2rem",
                borderRadius: "50px",
                borderColor: "white",
                textTransform: "none",
                color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#E50914",
                  borderColor: "#E50914",
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
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
    </Box>
  );
}
