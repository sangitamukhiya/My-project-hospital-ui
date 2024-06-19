import React from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  FormHelperText,
  Button,
  CircularProgress,
} from "@mui/material";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { loginValidationSchema } from "../validationSchema/login.validation.Schema.jsx";
import $axios from "../lib/axios/axios/instance.js";
import { useDispatch } from "react-redux";
import { openErrorSnackbar } from "../store/slices/snackbarSlice.js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isPending, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (values) => {
      // console.log(values);
      return await $axios.post("/user/login", values);
    },
    onSuccess: (res) => {
      navigate("/home");
      //extract token ,role and first name login response
      const accessToken = res?.data?.accessToken;
      const firstName = res?.data?.userDetails?.firstName;
      const role = res?.data?.userDetails?.role;

      //set these values to local storage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("role", role);
    },
    onError: (error) => {
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    },
  });

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        width: "100vw",
      }}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
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
                // justifyContent: "space-around",
                padding: "1rem",
                gap: "1rem",
                width: "45vw",
                marginLeft: "25rem",
                marginRight: "20rem",
                // justifyContent: "center",
                // alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Typography variant="h4">Login</Typography>

              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Button
                variant="contained"
                color="secondary"
                type="submit"
                onSubmit={() => {}}
              >
                Login
              </Button>

              <Link to="/register">New here? Register</Link>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
