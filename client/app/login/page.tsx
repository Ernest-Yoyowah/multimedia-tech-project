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

export default function Login() {
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
          Welcome Back
        </Typography>

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

        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "400px",
            width: "100%",
            margin: "0 auto",
          }}
        >
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
        </Box>

        {/* Login Button */}
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
            Login
          </Button>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{ marginTop: 2, justifyContent: "center" }}
        >
          <Grid item>
            <Button
              variant="text"
              color="primary"
              href="/register"
              sx={{
                textTransform: "none",
                color: "white",
                fontSize: "1rem",
              }}
            >
              Don&apos;t have an account? Register
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
