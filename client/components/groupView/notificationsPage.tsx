"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Snackbar,
  IconButton,
} from "@mui/material";
import NotificationIcon from "@mui/icons-material/NotificationImportant";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import the back icon
import { dummyNotifications } from "@/db/notifications";
import Link from "next/link";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(dummyNotifications);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });

  const handleNotificationClick = (notification) => {
    setSnackbar({
      open: true,
      message: `You clicked on: ${notification.title}`,
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        color: "#fff",
        minHeight: "100vh",
        pb: 10,
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", py: 4, px: 1 }}>
        <IconButton sx={{ color: "#fff" }}>
          <Link href="/browse-groups">
            <ArrowBackIcon />
          </Link>
        </IconButton>
        <Typography variant="h4" sx={{ fontWeight: "bold", ml: 2 }}>
          Notifications
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ py: 4, px: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 2,
          }}
        >
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              sx={{
                backgroundColor: "#242424",
                color: "#fff",
                borderRadius: "25px",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s",
                },
              }}
            >
              <Box onClick={() => handleNotificationClick(notification)}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      padding: 2,
                    }}
                  >
                    <NotificationIcon sx={{ fontSize: 40, color: "#fff" }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {notification.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#bbb", marginTop: 1 }}
                      >
                        {notification.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ open: false, message: "" })}
        message={snackbar.message}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      />
    </Box>
  );
}
