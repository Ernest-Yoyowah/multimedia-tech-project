import { Box, Button, Grid } from "@mui/material";
import CustomButton from "../common/customButton";
import InputField from "./inputField";

export default function LoginForm() {
  return (
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
      <InputField label="Email Address" />
      <InputField label="Password" type="password" />
      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
        <CustomButton label="Login" link="#" variant="contained" />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: 2, justifyContent: "center" }}
      >
        <Grid item>
          <Button
            variant="text"
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
    </Box>
  );
}
