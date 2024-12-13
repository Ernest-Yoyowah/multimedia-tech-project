import { useState } from "react";
import { validateEmail, validatePassword } from "../helpers/formValidation";

export function useLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({
      email: "",
      password: "",
    });

    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      return;
    }

    // Validate password
    if (!validatePassword(formData.password)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
      return;
    }

    // Handle successful login
    console.log("Logged in successfully:", formData);

    // Reset form
    setFormData({
      email: "",
      password: "",
    });
  };

  return { formData, errors, handleChange, handleSubmit };
}
