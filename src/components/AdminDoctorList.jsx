import { useQuery } from "@tanstack/react-query";
import React from "react";
import $axios from "../lib/axios/axios/instance.js";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import DoctorCard from "./DoctorCard.jsx";
import { useNavigate } from "react-router-dom";

const AdminDoctorList = () => {
  const navigate = useNavigate();
  const { isPending, data, error } = useQuery({
    queryKey: ["get-admin-doctorlist"],
    queryFn: async () => {
      return await $axios.post("/doctor/list/admin", {
        page: 1,
        limit: 6,
      });
    },
  });
  const doctorList = data?.data?.doctorList;
  //   console.log(doctorList);
  if (isPending) {
    return <CircularProgress />;
  }
  // if (error) {
  //   return <Typography color="error">Failed to load doctor list.</Typography>;
  // }
  return (
    <>
      <Button
        variant="contained"
        color="success"
        sx={{ mb: "3rem", marginTop: "1rem" }}
        onClick={() => {
          navigate("/add-doctor");
        }}
      >
        Add Doctor
      </Button>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          mb: "2rem",
          // backgroundColor: "red",
          width: "100vw",
        }}
      >
        {doctorList.map((item) => {
          // console.log(item);
          return <DoctorCard key={item._id} {...item} />;
        })}
      </Box>
    </>
  );
};

export default AdminDoctorList;
