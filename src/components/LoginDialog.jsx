import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik } from "formik";
import { loginValidationSchema } from "../validationSchema/login.validation.Schema";
import {
  CircularProgress,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import $axios from "../lib/axios/axios/instance";

const LoginDialog = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const { isPending, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (values) => {
      return await $axios.post("/user/login", values);
    },
    onSuccess: (res) => {
      navigate("/home");
      //extract token ,role and first name from
      const accessToken = res?.data?.accessToken;
      const firstName = res?.data?.userDetails?.firstName;
      const role = res?.data?.userDetails?.role;

      //set these values to local storage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("role", role);
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });
  if (isPending) {
    return <CircularProgress />;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="success"
        onClick={handleClickOpen}
        sx={{ marginLeft: "1rem" }}
      >
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        {/* <DialogTitle sx={{}}>{"Login"}</DialogTitle> */}
        <DialogContent>
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
                    justifyContent: "space-around",
                    padding: "1rem",
                    gap: "1rem",
                    width: "400px",
                    textAlign: "center",

                    // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <Typography variant="h4">Login</Typography>
                  <FormControl>
                    <TextField
                      label="Email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <FormHelperText error>
                        {formik.errors.email}
                      </FormHelperText>
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
                  <Link to="/register" onClick={handleClickOpen}>
                    New here? Register
                  </Link>
                </form>
              );
            }}
          </Formik>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
};
export default LoginDialog;
