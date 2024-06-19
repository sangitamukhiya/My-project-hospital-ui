import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addDoctorValidatoinSchema } from "../validationSchema/add.doctor.schema";
import { Formik } from "formik";
import { doctorDepartment } from "../constants/general.constant";
import { useMutation } from "@tanstack/react-query";
import $axios from "../lib/axios/axios/instance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../store/slices/snackbarSlice";

import { styled } from "@mui/material/styles";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import axios from "axios";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddDoctor = () => {
  // const [localUrl, setLocalUrl] = useState("");
  const [doctorImage, setDoctorImage] = useState(null);
  const [localUrl, setLocalUrl] = useState("");
  const [imageUploadUploading, setImageUploading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["add-doctor"],
    mutationFn: async (values) => {
      return await $axios.post("/doctor/add", values);
    },
    onSuccess: (res) => {
      navigate("/doctorList");
      dispatch(openSuccessSnackbar(res?.data?.message));
    },
    onError: (error) => {
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    },
  });
  if (isPending) {
    <CircularProgress />;
  }
  return (
    <Box
      sx={{
        width: "100vw",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          gender: "",
          experience: "",
          doctorDepartment: "",
          image: null,
        }}
        validationSchema={addDoctorValidatoinSchema}
        onSubmit={async (values) => {
          let imageUrl = null;
          if (doctorImage) {
            const data = new FormData();
            //cloudnary key
            const cloudName = "daaxs4xts";
            const uploadPreset = "janki_hospital";

            data.append("file", doctorImage);
            data.append("upload_preset", uploadPreset);
            data.append("cloud_name", cloudName);
            try {
              setImageUploading(true);
              const response = await axios.post(
                ` https://api.cloudinary.com/v1_1/${cloudName}/upload`,
                data
              );
              // console.log(response);
              imageUrl = response?.data?.secure_url;
              setImageUploading(false);
            } catch (error) {
              setImageUploading(false);
              console.log(error.message);
            }
          }

          values.image = imageUrl;

          // console.log(values);
          mutate(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              // padding: "1rem",
              gap: "1rem",
              width: "500px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              // width: "80vw",

              marginLeft: "30rem",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Typography variant="h4">Add Doctor</Typography>
            {/* <Stack>
              <img src={localUrl} alt="" />
            </Stack> */}

            {localUrl && (
              <Stack height="250px">
                <img src={localUrl} alt="" height="100%" />
              </Stack>
            )}

            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              choose file
              <VisuallyHiddenInput
                type="file"
                multiple
                onChange={(event) => {
                  //   console.log(event.target.files);//values console ma herna ko lagi
                  const file = event.target.files[0];
                  setDoctorImage(file);

                  setLocalUrl(URL.createObjectURL(file));
                }}
              />
            </Button>

            {/* <ImageUpload /> */}

            <FormControl fullWidth>
              <TextField
                label="First Name"
                {...formik.getFieldProps("firstName")}
                required
              />

              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Last Name"
                {...formik.getFieldProps("lastName")}
                required
              />

              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Email"
                {...formik.getFieldProps("email")}
                required
              />

              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Phone Number"
                {...formik.getFieldProps("phoneNumber")}
                required
              />

              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <FormHelperText error>
                  {formik.errors.phoneNumber}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Address"
                {...formik.getFieldProps("address")}
                required
              />

              {formik.touched.address && formik.errors.address ? (
                <FormHelperText error>{formik.errors.address}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                {...formik.getFieldProps("gender")}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  sx={{ textAlign: "center" }}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="preferNotToSay"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>

              {formik.touched.gender && formik.errors.gender ? (
                <FormHelperText error>{formik.errors.gender}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Experience"
                {...formik.getFieldProps("experience")}
                required
              />

              {formik.touched.experience && formik.errors.experience ? (
                <FormHelperText error>
                  {formik.errors.experience}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Department</InputLabel>
              <Select
                label="Department"
                {...formik.getFieldProps("doctorDepartment")}
              >
                {doctorDepartment.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>

              {formik.touched.doctorDepartment &&
              formik.errors.doctorDepartment ? (
                <FormHelperText error>
                  {formik.errors.doctorDepartment}
                </FormHelperText>
              ) : null}
            </FormControl>

            <Button fullWidth type="submit" variant="contained" color="success">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddDoctor;
