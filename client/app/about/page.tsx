"use client";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import BackgroundOverlay from "@/components/common/backgroundOverlay";
import NavBar from "@/components/common/navBar";
import Footer from "@/components/common/footer";

export default function About() {
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
      <NavBar buttonLabel="Home" link="/" />

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
          pb: 10,
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
            textAlign: { xs: "left", md: "left" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3.5rem", md: "4rem" },
              letterSpacing: "-1px",
              color: "white",
              marginBottom: "20px",
              textAlign: { xs: "left", md: "left" },
              fontFamily: "Arial, sans-serif",
            }}
          >
            About CampusConnect
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

      <Footer />
    </Box>
  );
}
