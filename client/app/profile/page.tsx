"use client";
import React, { useState } from "react";
import { Box, Avatar, Typography, IconButton, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputField from "@/components/auth/inputField"; // Assuming the InputField component is in the same folder
import CustomButton from "@/components/common/customButton"; // Assuming the CustomButton component is in the same folder
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import the back icon

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "/profile-placeholder.png",
    description: "Software engineer passionate about front-end development.",
    skills: "JavaScript, React, Node.js, TypeScript",
    socialLinks: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  });

  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserDetails((prev) => ({
          ...prev,
          profilePicture: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Logic to update user details (e.g., make an API call)
    console.log("User details updated:", userDetails);
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1C1C1C",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 5,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "flex-start",
          py: 2,
          px: 3,
          borderBottom: "2px solid #e50914",
        }}
      >
        <IconButton sx={{ color: "#fff" }}>
          <Link href="/browse-groups">
            <ArrowBackIcon />
          </Link>
        </IconButton>
        <Typography variant="h4" sx={{ fontWeight: "bold", ml: 2 }}>
          My Profile
        </Typography>
      </Box>

      {/* Profile Content */}
      <Box
        sx={{
          backgroundColor: "#242424",
          width: "100%",
          maxWidth: "600px",
          borderRadius: "15px",
          padding: 4,
          mt: 3,
          boxShadow: 3,
        }}
      >
        {/* Profile Picture Section */}
        <Box sx={{ textAlign: "center" }}>
          <Avatar
            sx={{
              width: 120,
              height: 120,
              marginBottom: 2,
              border: "3px solid #e50914",
              margin: "0 auto",
            }}
            src={userDetails.profilePicture}
          >
            {!userDetails.profilePicture && (
              <AccountCircleIcon sx={{ fontSize: 100, color: "#e50914" }} />
            )}
          </Avatar>

          <input
            type="file"
            id="profile-picture"
            hidden
            onChange={handleProfilePictureChange}
          />
          {isEditing && (
            <label htmlFor="profile-picture">
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  color: "#e50914",
                  mt: 1,
                  fontWeight: "bold",
                }}
              >
                Change Profile Picture
              </Typography>
            </label>
          )}

          {!isEditing && (
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                color: "#e50914",
                mt: 2,
                fontWeight: "bold",
              }}
              onClick={() => setIsEditing(true)} // Toggle edit mode
            >
              Edit Profile
            </Typography>
          )}
        </Box>

        {/* Displaying Profile Information or Edit Mode */}
        {!isEditing ? (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Name: {userDetails.name}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Email: {userDetails.email}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Description: {userDetails.description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Skills: {userDetails.skills}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" sx={{ color: "#1da1f2" }}>
                <Link href={userDetails.socialLinks.twitter} passHref>
                  Twitter
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: "#0e76a8", mt: 1 }}>
                <Link href={userDetails.socialLinks.linkedin} passHref>
                  LinkedIn
                </Link>
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box sx={{ mt: 4 }}>
            {/* Edit Mode: Form to Edit Details */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputField
                  label="Name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField
                  label="Email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Description"
                  name="description"
                  value={userDetails.description}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Skills"
                  name="skills"
                  value={userDetails.skills}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>

            {/* Social Links Section */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">Social Links</Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <InputField
                  label="Twitter"
                  name="twitter"
                  value={userDetails.socialLinks.twitter}
                  onChange={(e) =>
                    setUserDetails((prev) => ({
                      ...prev,
                      socialLinks: {
                        ...prev.socialLinks,
                        twitter: e.target.value,
                      },
                    }))
                  }
                />
                <InputField
                  label="LinkedIn"
                  name="linkedin"
                  value={userDetails.socialLinks.linkedin}
                  onChange={(e) =>
                    setUserDetails((prev) => ({
                      ...prev,
                      socialLinks: {
                        ...prev.socialLinks,
                        linkedin: e.target.value,
                      },
                    }))
                  }
                />
              </Box>
            </Box>

            {/* Save Button */}
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <CustomButton
                label="Save Changes"
                onClick={handleSave}
                width="200px"
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UserProfile;
