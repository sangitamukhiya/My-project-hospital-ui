import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Biography from "./Biography";
import Department from "./Department";

const AboutHospital = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "7rem",
          // backgroundColor: "red",
          width: "100vw",

          mb: "4rem",
          // mt: "2rem",
          // marginRight: "10px",
        }}
      >
        <Stack textAlign="justify" padding={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Welcome to Janaki Hospital!
          </Typography>
          <Typography variant="h6">
            Here, we strive to provide the highest quality of medical care to
            all our patients. We are here to provide you with the best
            healthcare experience. If you have any questions or need further
            assistance, please do not hesitate to contact us.
          </Typography>
        </Stack>
        <Stack height="20vw" width="100vw">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/007/681/899/small/hospital-building-outside-composition-vector.jpg"
            alt="Janki Hospital image "
          />
        </Stack>
        ,
      </Box>
      <Biography />
      <Department />
    </>
  );
};

export default AboutHospital;
