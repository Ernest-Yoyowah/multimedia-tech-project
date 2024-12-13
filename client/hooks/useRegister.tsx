import { useState } from "react";
import {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateConfirmPassword,
} from "../helpers/formValidation"; // Import the validation functions

// Define a type for the form data
interface FormData {
  fullName: string;
  phoneNumber: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function useRegister() {
  // Use the FormData type in useState to ensure all fields are typed correctly
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      fullName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });

    // Validate each field in order
    if (!formData.fullName.trim()) {
      setErrors((prev) => ({ ...prev, fullName: "Full name is required" }));
      return;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      setErrors((prev) => ({ ...prev, phoneNumber: "Invalid phone number" }));
      return;
    }

    if (!formData.username.trim()) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      return;
    }

    if (!validatePassword(formData.password)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
      return;
    }

    if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }

    // If all validations pass, submit the form
    console.log("Form Data Submitted:", formData);

    // Reset the form (optional)
    setFormData({
      fullName: "",
      phoneNumber: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return { formData, errors, handleChange, handleSubmit };
}
