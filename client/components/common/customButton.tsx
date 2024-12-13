import { Button } from "@mui/material";

interface CustomButtonProps {
  label: string;
  link: string;
  variant?: "contained" | "outlined";
}

export default function CustomButton({
  label,
  link,
  variant = "contained",
}: CustomButtonProps) {
  const isOutlined = variant === "outlined";

  return (
    <Button
      variant={isOutlined ? "outlined" : "contained"}
      color="primary"
      size="large"
      href={link}
      sx={{
        width: "200px",
        padding: "16px 32px",
        fontSize: "1.2rem",
        borderRadius: "50px",
        textTransform: "none",
        backgroundColor: isOutlined ? "transparent" : "#E50914",
        borderColor: isOutlined ? "white" : "transparent",
        color: isOutlined ? "white" : "white",
        "&:hover": {
          backgroundColor: isOutlined ? "white" : "#F40612",
          color: isOutlined ? "#E50914" : "white",
          borderColor: isOutlined ? "#E50914" : "transparent",
        },
      }}
    >
      {label}
    </Button>
  );
}
