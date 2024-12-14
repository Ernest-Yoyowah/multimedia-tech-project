"use client";
import React, { useState } from "react";
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

  const handleGroupClick = (group: Group) => {
    if (!group.members.includes(currentUser)) {
      setJoinModalOpen(true);
    } else {
      setSnackbar({
        open: true,
        message: `Welcome to the "${group.name}" group!`,
      });
    }
  };

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

  return (
    <Box sx={{ backgroundColor: "#141414", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <GroupsNav notices={dummyNotifications.length} />

      {/* Content */}
      <Box sx={{ py: 4, px: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Groups
          </Typography>
          <CustomButton
            label="Create Group"
            onClick={handleCreateGroup}
            width="200px"
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 2,
          }}
        >
          {groups.map((group) => (
            <Card
              key={group.id}
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
              <Box onClick={() => handleGroupClick(group)}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      padding: 2,
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
              </Box>
            </Card>
          ))}
        </Box>
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
