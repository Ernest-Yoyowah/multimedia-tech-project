import { Button } from "@mui/material";

interface CustomButtonProps {
  label: string;
  link?: string;
  variant?: "contained" | "outlined";
  type?: "button" | "submit" | "reset"; // Add `type` property
  onClick?: () => void;
  width?: string | number;
}

export default function CustomButton({
  label,
  link,
  variant = "contained",
  type = "button", // Default to "button"
  onClick,
  width = "140px",
}: CustomButtonProps) {
  const isOutlined = variant === "outlined";

  return (
    <Button
      type={type} // Pass the `type` prop to the button
      variant={isOutlined ? "outlined" : "contained"}
      color="primary"
      size="large"
      href={link}
      onClick={onClick}
      sx={{
        width: width,
        padding: "10px 32px",
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
