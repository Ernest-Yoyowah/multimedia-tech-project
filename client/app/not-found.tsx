import CustomButton from "@/components/common/customButton";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "72px", sm: "96px" },
          fontWeight: "bold",
          color: "#3a3a3a",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "16px", sm: "20px" },
          color: "#555",
          marginBottom: "20px",
        }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </Typography>

      <CustomButton label="Go Back to Home" link="/" />
    </Box>
  );
};

export default NotFound;
