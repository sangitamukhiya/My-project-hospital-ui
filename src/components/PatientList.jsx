import { Box, CircularProgress } from "@mui/material";
import React from "react";

import DoctorCard from "./DoctorCard";
import { useQuery } from "@tanstack/react-query";
import $axios from "../lib/axios/axios/instance";

const PatientList = () => {
  const { isPending, data } = useQuery({
    queryKey: ["get-patient-doctorlist"],
    queryFn: async () => {
      return await $axios.post("/doctor/list/patient", {
        page: 1,
        limit: 20,
      });
    },
  });
  if (isPending) {
    return <CircularProgress />;
  }
  const doctorList = data?.data?.doctorList;
  console.log(doctorList);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          mb: "2rem",
          width: "100vw",
          // backgroundColor: "red",
        }}
      >
        {doctorList.map((item) => {
          //   console.log(item);
          return <DoctorCard key={item._id} {...item} />;
        })}
      </Box>
    </>
  );
};

export default PatientList;
