import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { fallbackImage } from "../constants/general.constant";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import $axios from "../lib/axios/axios/instance";
import DeleteDoctorDialog from "../components/DeleteDoctorDialog";

const DoctorDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(params);
  const doctorId = params?.id;
  //get userr role
  const userRole = localStorage.getItem("role");

  const { isPending, data } = useQuery({
    queryKey: ["get-doctor-details"],
    queryFn: async () => {
      return await $axios.get(`/doctor/details/${doctorId}`);
    },
  });

  const doctorDetail = data?.data?.doctorDetails;

  if (isPending) <CircularProgress />;

  return (
    <Box
      sx={{
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "3rem",
        mt: "2rem",
        width: "70vw",
        gap: "3rem",

        marginLeft: "15rem",
        marginRight: "15rem",
        marginBottom: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "50%",
          width: "70vw",
        }}
      >
        <img
          src={doctorDetail?.image || fallbackImage}
          alt=""
          style={{ width: "90%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          width: "700px",
          gap: "1rem",
          textAlign: "justify",
        }}
      >
        {/* "firstName":"Neeraj",
    "lastName":"Shah",
    "email":"niraj@gmail.com",
    "phoneNumber":"9867438097",
    "address":"Birgunj",
    "gender":"male",
    "experience":"5 year",
    "doctorDepartment":"Hematology",
    "image":null */}

        <Typography variant="h5">
          Dr. {doctorDetail?.firstName} {doctorDetail?.lastName}
        </Typography>
        <Typography variant="h5">Email: {doctorDetail?.email}</Typography>
        <Typography variant="h5">
          PhoneNumber: {doctorDetail?.phoneNumber}
        </Typography>

        <Typography variant="h5">Address: {doctorDetail?.address}</Typography>
        <Chip
          label={doctorDetail?.gender}
          variant="outlined"
          color="success"
          sx={{ fontSize: "1rem", textTransform: "capitalize" }}
        />
        <Typography variant="h5">
          Experience: {doctorDetail?.experience}
        </Typography>
        <Chip
          label={doctorDetail?.doctorDepartment}
          variant="outlined"
          color="success"
          sx={{ fontSize: "1rem", textTransform: "capitalize" }}
        />
        {userRole === "admin" && (
          <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
            <Button
              variant="contained"
              color="success"
              startIcon={<EditIcon />}
              onClick={() => {
                navigate(`/doctor-edit/${doctorDetail?._id}`);
              }}
            >
              Edit
            </Button>
            {/* <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
             Delete
           </Button> */}
            <DeleteDoctorDialog />
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default DoctorDetails;
