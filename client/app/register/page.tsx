"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import InputField from "@/components/auth/inputField";
import BackgroundOverlay from "@/components/common/backgroundOverlay";
import NavBar from "@/components/common/navBar";
import CustomButton from "@/components/common/customButton";
import { useRegister } from "@/hooks/useRegister";

export default function Register() {
  const { formData, handleChange, handleSubmit, errors } = useRegister();

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
        component="form"
        onSubmit={handleSubmit}
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
            gap: 2,
            maxWidth: "400px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <InputField
            label="Full Name"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            error={!!errors.fullName} // Check if there's an error for this field
            helperText={errors.fullName} // Pass the error message
          />
          <InputField
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            error={!!errors.phoneNumber} // Check if there's an error for this field
            helperText={errors.phoneNumber} // Pass the error message
          />
          <InputField
            label="Username"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
            error={!!errors.username} // Check if there's an error for this field
            helperText={errors.username} // Pass the error message
          />
          <InputField
            label="Email Address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={!!errors.email} // Check if there's an error for this field
            helperText={errors.email} // Pass the error message
          />
          <InputField
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            error={!!errors.password} // Check if there's an error for this field
            helperText={errors.password} // Pass the error message
          />
          <InputField
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            error={!!errors.confirmPassword} // Check if there's an error for this field
            helperText={errors.confirmPassword} // Pass the error message
          />
        </Box>

        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CustomButton label="Register" type="submit" variant="contained" />
        </Box>

        <Grid
          container
          spacing={2}
          sx={{ marginTop: 3, justifyContent: "center" }}
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
    </Box>
  );
}
