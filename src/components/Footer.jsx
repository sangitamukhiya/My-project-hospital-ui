import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#bcbcb587",
        height: 250,

        width: " 100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          textAlign: "justify",
          gap: "9rem",
        }}
      >
        <Stack padding={2}>
          <h5>Janki hospital</h5>

          <img src="" alt="" />
        </Stack>
        <Stack padding={2}>
          <h5>Quick Links</h5>
          <Link to="/doctorList">Find Doctor</Link>

          <Link to="/appointment">Book an appointment</Link>
        </Stack>
        <Stack padding={2}>
          <h5>Learn More</h5>
          <Link to="/about">About Us</Link>
        </Stack>
        <Stack padding={2}>
          <h5>Contact Us</h5>
          <Stack direction="row" gap={3}>
            <MailOutlineIcon />
            <Typography>janki@gmail.com</Typography>
          </Stack>
          <Stack direction="row" gap={3}>
            <PhoneIcon />
            <Typography>+9779823567890</Typography>
          </Stack>
        </Stack>
        <Stack padding={2}>
          <h5>Follow Us</h5>
          <Stack direction="row" gap={2}>
            <Link>
              <FacebookIcon />
            </Link>
            <Link>
              <InstagramIcon />
            </Link>

            <Link>
              <TwitterIcon />
            </Link>
            <Link>
              <YouTubeIcon />
            </Link>
            <Link>
              <GitHubIcon />
            </Link>
          </Stack>
        </Stack>
      </Box>

      <Stack>
        <Typography
          variant="h5"
          sx={{
            color: "#4d4b4b",
            width: "100vw",
            mt: "4rem",
            backgroundColor: "#b9b5b987",
          }}
        >
          © 2020 Copyright: Nepal Electronic Mart
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
