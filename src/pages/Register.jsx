import {
  Button,
  CircularProgress,
  Dialog,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { loginValidationSchema } from "../validationSchema/login.validation.Schema";
import { Formik } from "formik";
import { registerUserValidationSchema } from "../validationSchema/register.validation.schema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import $axios from "../lib/axios/axios/instance";
import { useDispatch } from "react-redux";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../store/slices/snackbarSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((prevValue) => !prevValue);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //hit register api
  const { ispending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (values) => {
      return await $axios.post("/user/register", values);
    },
    onSuccess: (res) => {
      navigate("/login");
      dispatch(openSuccessSnackbar(res?.data?.message));
    },
    onError: (error) => {
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    },
  });

  if (ispending) {
    return <CircularProgress />;
  }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",

        gender: "",
      }}
      validationSchema={registerUserValidationSchema}
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
              padding: "1rem",
              gap: "1rem",
              width: "600px",
              textAlign: "center",
              // width: "45vw",
              marginLeft: "25rem",
              marginRight: "20rem",

              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Typography variant="h4">Register</Typography>
            <FormControl>
              <TextField
                label="First Name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Last Name"
                {...formik.getFieldProps("lastName")}
                required
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Email"
                {...formik.getFieldProps("email")}
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                {...formik.getFieldProps("password")}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />

              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth required>
              <InputLabel>Role</InputLabel>
              <Select label="Role" {...formik.getFieldProps("role")}>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="patient">Patient</MenuItem>
              </Select>

              {formik.touched.role && formik.errors.role ? (
                <FormHelperText error>{formik.errors.role}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select label="Gender" {...formik.getFieldProps("gender")}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="preferNotToSay">Prefer not to say</MenuItem>
              </Select>

              {formik.touched.gender && formik.errors.gender ? (
                <FormHelperText error>{formik.errors.gender}</FormHelperText>
              ) : null}
            </FormControl>

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onSubmit={() => {}}
            >
              Register
            </Button>
            <Link to="/login">Already registered? Login</Link>
          </form>
        );
      }}
    </Formik>
    // </Dialog>
  );
};

export default Register;
