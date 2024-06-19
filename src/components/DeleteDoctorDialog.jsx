import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import $axios from "../lib/axios/axios/instance";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../store/slices/snackbarSlice";

const DeleteDoctorDialog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const doctorId = params?.id;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //delete api hit
  const { isPending, mutate } = useMutation({
    mutationKey: ["delete-doctor"],
    mutationFn: async () => {
      return await $axios.delete(`/doctor/delete/${doctorId}`);
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
    <React.Fragment>
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this doctor details."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This process is irreversiable.Doctor details is permanently deleted
            after this action..
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              mutate();
              handleClose();
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default DeleteDoctorDialog;
