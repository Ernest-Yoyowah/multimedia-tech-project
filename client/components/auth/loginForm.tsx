import { Box, Button, Grid, Snackbar } from "@mui/material";
import CustomButton from "../common/customButton";
import InputField from "./inputField";
import { useLogin } from "@/hooks/useLogin";
import Link from "next/link"; // Import Link for navigation
import { useState } from "react"; // Import useState to manage Snackbar state

export default function LoginForm() {
  const { formData, errors, handleChange } = useLogin();
  const [snackbar, setSnackbar] = useState({ open: false, message: "" }); // Snackbar state

  // Hardcoded credentials
  const hardcodedEmail = "group2@multimedia.com";
  const hardcodedPassword = "group2";

  // Modified handleSubmit to check for hardcoded credentials
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the credentials match
    if (
      formData.email === hardcodedEmail &&
      formData.password === hardcodedPassword
    ) {
      // Redirect to /browse-groups using Link (will be handled by Next.js)
      window.location.href = "/browse-groups";
    } else {
      // If credentials don't match, show an error using Snackbar
      setSnackbar({
        open: true,
        message: "Invalid credentials. Please try again.",
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin} // Use handleLogin instead of handleSubmit
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
        label="Email Address"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <InputField
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
        error={!!errors.password}
        helperText={errors.password}
      />
      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
        <CustomButton label="Login" type="submit" variant="contained" />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: 2, justifyContent: "center" }}
      >
        <Grid item>
          <Link href="/register" passHref>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: "white",
                fontSize: "1rem",
              }}
            >
              Don&apos;t have an account? Register
            </Button>
          </Link>
        </Grid>
      </Grid>

      {/* Snackbar for alerts */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ open: false, message: "" })}
        message={snackbar.message}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#E50914",
            color: "#fff",
          },
        }}
      />
    </Box>
  );
}
