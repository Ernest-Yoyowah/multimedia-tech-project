"use client";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function NavBar({ buttonLabel = "About", link = "/about" }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { md: "16px 30px", xs: "16px 0px" },
        zIndex: 2,
      }}
    >
      {/* Logo */}
      <Box>
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="Campus Connect Logo"
            width={300}
            height={100}
          />
        </Link>
      </Box>

      {/* About Us Button */}
      <Box sx={{ marginRight: { md: 0, xs: 1 } }}>
        <Button
          variant="outlined"
          color="primary"
          href={link}
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            color: "white",
            borderColor: "white",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "white",
              color: "#E50914",
              borderColor: "#E50914",
            },
          }}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Box>
  );
}
