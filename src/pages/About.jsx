import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          mb: "3rem",
        }}
      >
        <Stack>
          <img
            src="public\mountain.jpg"
            alt=""
            style={{
              height: 250,
              width: "100vw",
            }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          textAlign: "justify",
          gap: "7rem",
          mb: "3rem",
          padding: "2rem",
          backgroundColor: "#f4efef",
        }}
      >
        <Stack gap="1rem">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            obcaecati blanditiis. Saepe provident nisi, dolores, consectetur
            expedita in cupiditate accusantium est aperiam minus sed veritatis
            voluptatum, magnam debitis. Hic, ad.
          </Typography>
          <Typography>
            Our team of experienced doctors, nurses, and support staff work
            collaboratively to deliver comprehensive care across various
            specialties, including cardiology, neurology, orthopedics,
            pediatrics, gynecology, and oncology. We are dedicated to making
            advanced medical treatments accessible to all and ensuring the best
            possible outcomes for our patients.
          </Typography>
          <Typography>
            Janaki Hospital is also deeply rooted in the community. We actively
            participate in health camps, educational programs, and partnerships
            with local organizations to promote health and wellness. Our goal is
            not only to treat illnesses but also to prevent them and improve the
            overall quality of life for the people we serve.
          </Typography>
        </Stack>
        <Stack
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            textAlign: "justify",
            padding: "2rem",
            gap: "1rem",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Message From The Medical Director
          </Typography>
          <Typography>Dear Friends and Valued Patients,</Typography>
          <Typography>
            Welcome to Janaki Hospital, where our mission is to provide
            exceptional healthcare services with compassion, integrity, and
            excellence. I am honored to lead a team of dedicated professionals
            who are committed to improving the health and well-being of our
            community.
          </Typography>
          <Typography>
            At Janaki Hospital, we understand that healthcare is not just about
            treating illnesses its about caring for individuals and their
            families. Our patient-centered approach ensures that every patient
            receives personalized care tailored to their specific needs. We
            strive to create a healing environment where you feel safe,
            comfortable, and supported throughout your healthcare journey.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
              sx={{ width: 70, height: 70 }}
            />
            <Typography variant="h5">Dr.Roshan Mukhiya</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          mb: "3rem",
          display: "flex",
          gap: "4rem",

          width: "100vw",
          paddingLeft: "2rem",
        }}
      >
        <Stack width="45vw" sx={{ padding: "2rem" }}>
          <img
            src="https://scam.tn/wp-content/uploads/2023/05/vision.jpg"
            alt=""
          />
        </Stack>
        <Stack textAlign="justify" mt="3rem" gap="2rem">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Our vision
          </Typography>
          <Typography variant="h6" sx={{ paddingRight: "2rem" }}>
            To be a leading healthcare provider recognized for innovative
            medical practices, exceptional patient care, and a holistic approach
            to health and wellness. To be recognized as a leading healthcare
            provider known for innovative, patient-centered care, and medical
            excellence.
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          mb: "3rem",
          display: "flex",
          gap: "2rem",

          width: "100vw",
          paddingLeft: "2rem",
        }}
      >
        <Stack textAlign="justify" mt="3rem" gap="2rem">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Our Mission
          </Typography>
          <Typography variant="h6" sx={{ paddingRight: "2rem" }}>
            To be a leading healthcare provider recognized for innovative
            medical practices, exceptional patient care, and a holistic approach
            to health and wellness. To be recognized as a leading healthcare
            provider known for innovative, patient-centered care, and medical
            excellence.
          </Typography>
        </Stack>
        <Stack width="45vw" sx={{ padding: "2rem" }}>
          <img
            src="https://bpmlifescience.com/assets/img/home-one/mission.jpg"
            alt=""
          />
        </Stack>
      </Box>
      <Box
        sx={{
          mb: "3rem",
          display: "flex",
          gap: "9rem",

          width: "100vw",
          paddingLeft: "2rem",
        }}
      >
        <Stack width="45vw" sx={{ padding: "2rem" }}>
          <img
            src="https://www.goldennepalholidays.com/wp-content/uploads/2020/02/health-1.jpg"
            alt=""
          />
        </Stack>
        <Stack textAlign="justify" mt="3rem">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Our Services
          </Typography>
          <Typography variant="h6" sx={{ paddingRight: "2rem" }}>
            <ol>
              <li> General Medicine</li>
              <li> Emergency Services</li>
              <li>Specialty Departments</li>
              <li>Diagnostic Services</li>
              <li>Specialty Departments</li>
            </ol>
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default About;
