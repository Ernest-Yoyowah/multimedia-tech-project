import { TextField, Typography, FormHelperText } from "@mui/material";

interface InputFieldProps {
  label: string;
  type?: string;
  value: string; // Add `value` prop
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add `onChange` prop
  error?: boolean; // Add `error` prop to show error state
  helperText?: string; // Add `helperText` prop to display error message
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  error = false, // Default value is `false`
  helperText = "", // Default value is an empty string
}) => {
  return (
    <>
      <Typography sx={{ textAlign: "left", fontWeight: "500" }}>
        {label}
      </Typography>
      <TextField
        type={type}
        value={value} // Bind `value` prop
        onChange={onChange} // Bind `onChange` prop
        variant="outlined"
        fullWidth
        error={error} // Pass `error` prop to highlight the input field when error is true
        InputLabelProps={{
          shrink: false, // Do not shrink the label when the field is focused
        }}
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          "& .MuiInputBase-root": {
            color: "black", // Text color
          },
          // Remove the border for all variants (outlined)
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Remove the border around the fieldset
            },
            "&:hover fieldset": {
              border: "none", // Remove hover border
            },
            "&.Mui-focused fieldset": {
              border: "none", // Remove focus border
            },
          },
          // For filled inputs, remove borders as well
          "& .MuiFilledInput-root": {
            backgroundColor: "transparent", // Transparent background
            "&:before": {
              borderBottom: "none", // No border before focus
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottom: "none", // No hover border
            },
            "&.Mui-focused:before": {
              borderBottom: "none", // No focus border
            },
          },
          // Hide the label when typing (focused)
          "& .MuiInputLabel-root": {
            visibility: "hidden", // Hide the label when focused
          },
          "& .MuiInputBase-root.Mui-focused + .MuiInputLabel-root": {
            visibility: "hidden", // Ensure the label remains hidden when focused and typing
          },
        }}
      />
      {error && helperText && (
        <FormHelperText error sx={{ marginTop: "4px" }}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default InputField;
