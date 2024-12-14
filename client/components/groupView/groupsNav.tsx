"use client";
import React, { useState } from "react";
import { Box, IconButton, Avatar, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import Image from "next/image";

const GroupsNav = ({ notices = 0 }) => {
  const [unreadNotifications, setUnreadNotifications] = useState(notices);

  return (
    <>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          borderBottom: "1px solid #333",
        }}
      >
        <Box>
          <Link href="/browse-groups">
            <Image
              src="/logo2.png"
              alt="Campus Connect Logo"
              width={200}
              height={100}
            />
          </Link>
        </Box>
        <Box>
          <IconButton>
            <Link href="/notifications">
              <Badge
                badgeContent={unreadNotifications}
                color="error"
                invisible={unreadNotifications === 0}
              >
                <NotificationsIcon sx={{ color: "#fff" }} />
              </Badge>
            </Link>
          </IconButton>
          <IconButton>
            <Link href="/profile">
              <Avatar sx={{ bgcolor: "#e50914" }}>
                <AccountCircleIcon />
              </Avatar>
            </Link>
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default GroupsNav;
