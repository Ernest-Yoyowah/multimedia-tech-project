import { Box, Button, Grid } from "@mui/material";
import CustomButton from "../common/customButton";
import InputField from "./inputField";
import { useLogin } from "@/hooks/useLogin";

export default function LoginForm() {
  const { formData, errors, handleChange, handleSubmit } = useLogin();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
