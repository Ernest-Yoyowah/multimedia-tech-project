"use client";
import Image from "next/image";
import {
  Button,
  Box,
  Typography,
  Container,
  Grid,
  TextField,
} from "@mui/material";

export default function Register() {
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

      {/* Top Right: About Us button */}
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
          maxWidth: "sm",
          marginTop: "16vh", // Adds space at the top to center the form vertically
          paddingBottom: "100px", // Add padding at the bottom to ensure footer space
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
          Create Your Account
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "1rem", sm: "1.2rem" },
              lineHeight: 1.5,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Join Campus Connect today and unlock the opportunities that await.
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            gap: 3, // Increased gap between form fields
            maxWidth: "400px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* Name Input */}
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
          />

          {/* Phone Number Input */}
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
          />

          {/* Location Input */}
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
          />

          {/* Username Input */}
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
          />

          {/* Email Input */}
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
          />

          {/* Password Input */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
          />

          {/* Confirm Password Input */}
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
          />
        </Box>

        {/* Register Button */}
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
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
            Register
          </Button>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{ marginTop: 3, justifyContent: "center" }} // Added more space above the link
        >
          <Grid item>
            <Button
              variant="text"
              color="primary"
              href="/login"
              sx={{
                textTransform: "none",
                color: "white",
                fontSize: "1rem",
              }}
            >
              Already have an account? Login
            </Button>
          </Grid>
        </Grid>
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
