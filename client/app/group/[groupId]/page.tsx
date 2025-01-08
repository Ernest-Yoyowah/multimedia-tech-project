"use client";
import React, { useState, useEffect, useRef } from "react";
import { Box, Avatar, Typography, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { dummyMessages, dummyGroups } from "@/db/groups"; // Dummy data
import Link from "next/link";

export default function GroupChatPage() {
  const [messages, setMessages] = useState<
    {
      id: number;
      sender: string;
      text: string;
      image: string | null;
      timestamp: Date;
    }[]
  >(dummyMessages);

  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const currentGroup = dummyGroups[0]; // Replace with dynamic group data
  const currentUser = "user3"; // Replace with dynamic user

  // Scroll to bottom of chat when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const sendMessage = () => {
    if (!input && !selectedImage) return;

    const newMessage = {
      id: messages.length + 1,
      sender: currentUser,
      text: input,
      image: selectedImage ? imagePreview : null,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setSelectedImage(null);
    setImagePreview(null); // Reset preview after sending
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file)); // Set the image preview
    }
  };

  return (
    <Box sx={{ backgroundColor: "#141414", color: "#fff", minHeight: "100vh" }}>
      {/* Group Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#242424",
          padding: "10px 20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton sx={{ color: "#fff" }}>
            <Link href="/browse-groups">
              <ArrowBackIcon />
            </Link>
          </IconButton>
          <Avatar src={currentGroup.iconUrl} alt={currentGroup.name} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {currentGroup.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              {currentGroup.description}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Chat Messages */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          px: 2,
          pt: 2,
          height: "calc(100vh - 160px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: "flex",
              justifyContent:
                message.sender === currentUser ? "flex-end" : "flex-start",
              mb: 2,
            }}
          >
            <Box
              sx={{
                maxWidth: "70%",
                // backgroundColor:
                //   message.sender === currentUser ? "#0f7b6c" : "#242424",
                padding: "10px",
                borderRadius: "10px",
                wordWrap: "break-word",
              }}
            >
              {message.image && (
                <img
                  src={message.image}
                  alt="Sent"
                  style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
              )}
              {message.text && (
                <Box
                  sx={{
                    backgroundColor:
                      message.sender === currentUser ? "#0f7b6c" : "#242424",
                    padding: "2px 20px 2px 10px",
                    borderRadius: "0  15px 0",
                  }}
                >
                  <Typography
                    sx={{
                      color: message.sender === currentUser ? "pink" : "orange",
                    }}
                  >
                    {message.sender}
                  </Typography>
                  <Typography sx={{ color: "#fff" }}>{message.text}</Typography>
                </Box>
              )}
              <Typography
                variant="caption"
                sx={{
                  color: "#bbb",
                  display: "block",
                  mt: 1,
                  textAlign: "right",
                }}
              >
                {new Date(message.timestamp).toLocaleTimeString()}
              </Typography>
            </Box>
          </Box>
        ))}
        <div ref={chatEndRef}></div>
        {/* Image Preview */}
        {imagePreview && (
          <Box
            sx={{
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#242424",
            }}
          >
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </Box>
        )}
      </Box>

      {/* Message Input */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#242424",
        }}
      >
        <IconButton component="label" sx={{ color: "#fff" }}>
          <AttachFileIcon />
          <input
            type="file"
            hidden
            onChange={handleFileUpload}
            accept="image/*"
          />
        </IconButton>
        <TextField
          variant="outlined"
          placeholder="Type a message"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            backgroundColor: "#141414",
            borderRadius: "5px",
            input: { color: "#fff" },
          }}
        />
        <IconButton onClick={sendMessage} sx={{ color: "#fff" }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
