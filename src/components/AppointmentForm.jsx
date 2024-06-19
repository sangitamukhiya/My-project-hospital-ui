import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
// import React, { useState } from "react";
import { addApointmentValidatoinSchema } from "../validationSchema/appointment.validation.schema";
import { doctorDepartment } from "../constants/general.constant";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import $axios from "../lib/axios/axios/instance";
import { useState } from "react";

const AppointmentForm = (props) => {
  // const params = useParams();
  // console.log(params);
  // const doctorId = params?.id;

  // console.log(doctorId);

  //fetch doctor details

  // const { isPending, data } = useQuery({
  //   queryKey: ["get-doctor-details"],
  //   queryFn: async () => {
  //     return await $axios.get(`/doctor/details/${doctorId}`);
  //   },
  // });
  const { isPending, mutate } = useMutation({
    mutationKey: ["add-appointment"],
    mutationFn: async (values) => {
      return await $axios.post("/apointment/add", values);
    },
  });

  // if (isPending) {
  //   <CircularProgress />;
  // }
  // const doctors=data?.data?.doctorList
  return (
    <Box
      sx={{
        width: "100vw",
        // backgroundColor: "red",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          gender: "",
          apointment_date: "",
          doctor: "",
          // doctor_firstName: "",
          // doctor_lastName: "",

          department: "",
          hasVisited: "",
          address: "",
        }}
        validationSchema={addApointmentValidatoinSchema}
        onSubmit={(values) => {
          // console.log(values);
          mutate(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                // backgroundColor: "red",
                // width: "100vw",
                // justifyContent: "center",
                // alignItems: "center",
                width: "80vw",

                marginLeft: "9rem",
                padding: "2rem",
                marginBottom: "2rem",

                // width: "900px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Stack
                alignItems="center"
                mt="1rem"
                mb="1rem"
                paddingLeft={2}
                paddingRight={2}
              >
                <Typography variant="h4">Appointment </Typography>
              </Stack>
              <Stack direction="row" spacing={2} padding={1}>
                <FormControl fullWidth>
                  <TextField
                    label="FirstName"
                    {...formik.getFieldProps("firstName")}
                  />

                  {formik.touched.firstName && formik.errors.firstName ? (
                    <FormHelperText error>
                      {formik.errors.firstName}
                    </FormHelperText>
                  ) : null}
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="lastName"
                    {...formik.getFieldProps("lastName")}
                  />

                  {formik.touched.lastName && formik.errors.lastName ? (
                    <FormHelperText error>
                      {formik.errors.lastName}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Stack>

              <Stack direction="row" spacing={2} padding={1}>
                <FormControl fullWidth>
                  <TextField label="Email" {...formik.getFieldProps("email")} />

                  {formik.touched.email && formik.errors.email ? (
                    <FormHelperText error>{formik.errors.email}</FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    label="Phone Number"
                    {...formik.getFieldProps("phoneNumber")}
                  />

                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <FormHelperText error>
                      {formik.errors.phoneNumber}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2} padding={1}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select label="Gender" {...formik.getFieldProps("gender")}>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="preferNotToSay">
                      Prefer not to say
                    </MenuItem>
                  </Select>

                  {formik.touched.gender && formik.errors.gender ? (
                    <FormHelperText error>
                      {formik.errors.gender}
                    </FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    label="Appointment Date"
                    {...formik.getFieldProps("apointment_date")}
                  />

                  {formik.touched.apointment_date &&
                  formik.errors.apointment_date ? (
                    <FormHelperText error>
                      {formik.errors.apointment_date}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Stack>

              <Stack direction="row" spacing={2} padding={1}>
                <FormControl fullWidth required>
                  <InputLabel>Department</InputLabel>
                  <Select
                    label="Select Department "
                    {...formik.getFieldProps("department")}
                  >
                    {doctorDepartment.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>

                  {formik.touched.department && formik.errors.department ? (
                    <FormHelperText error>
                      {formik.errors.department}
                    </FormHelperText>
                  ) : null}
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Select doctor"
                    {...formik.getFieldProps("doctor")}
                  />

                  {formik.touched.doctor && formik.errors.doctor ? (
                    <FormHelperText error>
                      {formik.errors.doctor}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2} padding={1}>
                <FormControl fullWidth>
                  <TextField
                    label="Address"
                    {...formik.getFieldProps("address")}
                  />

                  {formik.touched.address && formik.errors.address ? (
                    <FormHelperText error>
                      {formik.errors.address}
                    </FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl fullWidth>
                  <FormControlLabel
                    label="Have you visited before?"
                    control={
                      <Checkbox {...formik.getFieldProps("hasVisited")} />
                    }
                  />

                  {formik.touched.hasVisited && formik.errors.hasVisited ? (
                    <FormHelperText error>
                      {formik.errors.hasVisited}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Stack>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                  marginLeft: "20rem",
                  marginRight: "20rem",
                  mb: "2rem",
                }}
                onSubmit={() => {}}
              >
                Get appointment
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default AppointmentForm;
