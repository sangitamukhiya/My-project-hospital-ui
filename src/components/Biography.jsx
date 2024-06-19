import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Biography = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "7rem",
        mb: "3rem",

        // backgroundColor: "red",
        width: "100vw",
      }}
    >
      <Stack width="100vw" padding={3}>
        <img
          src="https://t3.ftcdn.net/jpg/02/95/73/48/360_F_295734825_efDAu2DFa7iyg8qTDizW8EPsjZmrjjCE.jpg"
          alt=" Janki hospital image"
        />
      </Stack>
      <Stack textAlign="justify">
        <Typography variant="h4">Biography </Typography>
        <Typography variant="h6" paddingRight="5rem">
          Janaki Hospital was established in [Year] by [Founder’s Name], a
          visionary in the field of healthcare who aimed to provide high-quality
          medical services to the local community. Located in [City/Town], the
          hospital started as a modest facility with a few departments and a
          dedicated team of healthcare professionals.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Biography;
