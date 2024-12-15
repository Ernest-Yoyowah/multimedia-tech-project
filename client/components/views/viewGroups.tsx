"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Snackbar,
  Avatar,
  Modal,
} from "@mui/material";
import CustomButton from "../common/customButton";
import InputField from "../auth/inputField";
import GroupIcon from "@mui/icons-material/Group";
import GroupsNav from "../groupView/groupsNav";
import { dummyGroups } from "@/db/groups";
import { Group } from "@/types/types";
import { dummyNotifications } from "@/db/notifications";

export default function ViewGroups() {
  const [groups, setGroups] = useState<Group[]>(dummyGroups);
  const [currentUser] = useState<string>("user3");
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [newGroup, setNewGroup] = useState({ name: "", description: "" });
  const [view, setView] = useState<"all" | "my">("all");

  const handleGroupClick = (group: Group) => {
    if (!group.members.includes(currentUser)) {
      setJoinModalOpen(true);
    } else {
      // Navigate to the group page using Next.js Link
      window.location.href = `/group/${group.id}`;
    }
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleCreateGroup = () => {
    setCreateModalOpen(true);
  };

  const createGroup = () => {
    if (newGroup.name && newGroup.description) {
      const newGroupData: Group = {
        id: groups.length + 1,
        name: newGroup.name,
        description: newGroup.description,
        members: [currentUser],
        admin: currentUser,
      };
      setGroups((prev) => [...prev, newGroupData]);
      setSnackbar({
        open: true,
        message: `Group "${newGroup.name}" created successfully!`,
      });
      setCreateModalOpen(false);
      setNewGroup({ name: "", description: "" });
    }
  };

  // Filter groups based on the selected view
  const filteredGroups =
    view === "all"
      ? groups
      : groups.filter((group) => group.admin === currentUser);

  return (
    <Box sx={{ backgroundColor: "#141414", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <GroupsNav notices={dummyNotifications.length} />

      {/* Top Buttons */}
      <Box sx={{ mt: 2, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
            mx: 2,
            px: "5px",
            py: "7px",
            backgroundColor: "#242424",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: view === "all" ? "#141414" : "transparent",
              width: "48%",
              borderRadius: "5px",
              height: "48px",
              cursor: "pointer",
            }}
            onClick={() => setView("all")}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: view === "all" ? "#fff" : "#bbb",
              }}
            >
              All Groups
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: view === "my" ? "#141414" : "transparent",
              width: "48%",
              borderRadius: "5px",
              height: "48px",
              cursor: "pointer",
            }}
            onClick={() => setView("my")}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: view === "my" ? "#fff" : "#bbb",
              }}
            >
              My Groups
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Groups Grid */}
      <Box sx={{ py: 2, px: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 2,
          }}
        >
          {filteredGroups.map((group) => (
            <Card
              key={group.id}
              sx={{
                backgroundColor: "#242424",
                color: "#fff",
                borderRadius: "10px",
                cursor: "pointer", // Add this for a clear indication that the card is clickable
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s",
                },
              }}
              onClick={() => handleGroupClick(group)} // Move onClick to Card
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    px: 1,
                  }}
                >
                  <Avatar
                    src={group.iconUrl ? group.iconUrl : undefined}
                    alt={group.name}
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: "#333",
                    }}
                  >
                    {!group.iconUrl && <GroupIcon />}
                  </Avatar>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {group.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#bbb", marginTop: 1 }}
                    >
                      {group.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Create Group Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: "40px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CustomButton
          label="+ Create Group"
          onClick={handleCreateGroup}
          width="220px"
        />
      </Box>

      {/* Create Group Modal */}
      <Modal open={createModalOpen} onClose={() => setCreateModalOpen(false)}>
        <Box sx={{ ...modalStyles }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Create a New Group
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <InputField
              label="Group Name"
              value={newGroup.name}
              onChange={(e) =>
                setNewGroup((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <InputField
              label="Description"
              value={newGroup.description}
              onChange={(e) =>
                setNewGroup((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <CustomButton label="Create" onClick={createGroup} />
          </Box>
        </Box>
      </Modal>

      {/* Snackbar for alerts */}
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

      {/* Join Request Modal */}
      <Modal open={joinModalOpen} onClose={() => setJoinModalOpen(false)}>
        <Box sx={{ ...modalStyles }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Request to Join
          </Typography>
          <Typography>
            You are not a member of this group. Would you like to request to
            join?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <CustomButton
              label="Cancel"
              onClick={() => setJoinModalOpen(false)}
            />
            <CustomButton
              label="Request"
              onClick={() => {
                setSnackbar({
                  open: true,
                  message: "Request sent to the admin.",
                });
                setJoinModalOpen(false);
              }}
              variant="outlined"
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#242424",
  color: "#fff",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};
