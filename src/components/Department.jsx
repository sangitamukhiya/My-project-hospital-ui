import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Department = () => {
  const departmentArray = [
    {
      name: "Orthopedics",
      imageUrl: "/ortho.jpg",
    },
    {
      name: "Gynecology",
      imageUrl: "public/gyno.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "public/derm.jpg",
    },
    {
      name: "Pediatrics",
      imageUrl: "/Pediatrics.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "/radio.jpg",
    },
    {
      name: "Hematology",
      imageUrl: "public/ent.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/neurol.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "public/cardio.jpeg",
    },
    {
      name: "Gastroenterology",
      imageUrl: "public/cardio.jpeg",
    },
    {
      name: "Cardiology",
      imageUrl: "public/cardio.jpeg",
    },

    {
      name: "Urology",
      imageUrl: "/uro.jpg",
    },
    {
      name: "Ear,nose and throat",
      imageUrl: "public/ent.jpg",
    },
    {
      name: "Radiotherapy",
      imageUrl: "public/gyno.jpg",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box
      sx={{
        mb: "3rem",
        // backgroundColor: "red",
        width: "100vw",
        padding: 2,
        // marginRight: "2rem",
      }}
    >
      <Stack>
        <Typography variant="h5" sx={{ fontWeight: "bold", gap: "2rem" }}>
          Department
        </Typography>

        <Carousel responsive={responsive}>
          {departmentArray.map((item, index) => {
            return (
              <Stack
                key={index}
                sx={{
                  height: 300,
                  gap: "1rem",
                }}
              >
                <Stack width="400px">
                  <img src={item.imageUrl} alt="{item.name}" />
                  <Chip
                    label={item.name}
                    color="secondary"
                    variant="outlined"
                    mb="5rem"
                  />
                </Stack>
              </Stack>
            );
          })}
        </Carousel>
      </Stack>
    </Box>
  );
};

export default Department;
