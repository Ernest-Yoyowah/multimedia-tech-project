"use client";
import Image from "next/image";
import { Box, Button, Typography, Container } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "url('/landing1.jpg')", // Background image for the About page
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
          left: { md: 30, xs: 1 },
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

      {/* Top Right: Back to Home Button */}
      <Box
        sx={{
          position: "absolute",
          top: { md: 16, xs: 24 },
          right: { md: 30, xs: 18 },
          zIndex: 2,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          href="/"
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
          Home
        </Button>
      </Box>

      {/* About Us Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          padding: "0 16px",
          maxWidth: "lg",
          marginTop: "12vh", // Adds space at the top to center the content vertically
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on medium and larger screens
          alignItems: "center",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mb: { xs: 3, md: 0 }, // Add bottom margin for mobile view
          }}
        >
          <Image
            src="/connect.jpg" // A relevant image for the About Us section
            alt="Campus Connect"
            width={600}
            height={400}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            padding: { xs: "0 20px", md: "0 50px" }, // Add padding for text on larger screens
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              letterSpacing: "-1px",
              color: "white",
              marginBottom: "20px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            About Campus Connect
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
              fontFamily: "Arial, sans-serif",
            }}
          >
            Campus Connect is a platform designed to help students connect,
            collaborate, and grow. Our goal is to empower students by providing
            tools and resources to enhance their academic journey and career
            prospects.
          </Typography>

          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              Our platform connects students to a wide range of academic
              resources, career opportunities, and peer support groups, creating
              a holistic ecosystem for personal and professional growth.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              With our easy-to-use interface, students can stay updated on
              relevant opportunities, engage in meaningful discussions, and
              access career services designed to help them succeed in the
              competitive job market.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
