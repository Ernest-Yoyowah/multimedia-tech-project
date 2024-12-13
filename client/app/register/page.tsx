import { Box, Button, Container, Grid, Typography } from "@mui/material";
import InputField from "@/components/auth/inputField";
import BackgroundOverlay from "@/components/common/backgroundOverlay";
import NavBar from "@/components/common/navBar";
import CustomButton from "@/components/common/customButton";

export default function Register() {
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
            gap: 2,
            maxWidth: "400px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <InputField label="Full Name" />
          <InputField label="Phone Number" />
          <InputField label="Username" />
          <InputField label="Email Address" />
          <InputField label="Password" type="password" />
          <InputField label="Confirm Password" type="password" />
        </Box>

        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CustomButton label="Register" link="#" variant="contained" />
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
