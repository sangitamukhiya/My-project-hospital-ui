import {
  Box,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const userRole = localStorage.getItem("role");

const AdminaAppointmentTable = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          direction: "row",
          gap: "1rem",
          mb: "2rem",
          width: "100vw",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          width="600px"
          spacing={2}
          marginLeft="4rem"
          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="doct image"
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Hello,{localStorage.getItem("firstName")}
          </Typography>
        </Stack>

        <Stack
          alignItems="center"
          textAlign="center"
          width="390px"
          padding={2}
          spacing={2}
          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Total Appointment
          </Typography>
          <Typography variant="h6">50</Typography>
        </Stack>
        <Stack
          alignItems="center"
          textAlign="center"
          width="350px"
          spacing={2}
          padding={2}
          marginRight="1rem"
          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Total Doctors
          </Typography>
          <Typography variant="h6">20</Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "90vw",
          // padding: "7rem",
          marginLeft: "4rem",
          marginRight: "15rem",
          mb: "2rem",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2} padding={2}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Appointment
          </Typography>
        </Stack>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">S.N.</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Patient Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Date</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Doctor</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Department</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Visited</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {.map((item, index) => (
            <TableRow
              key={item._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            > */}
            {/* </TableRow> */}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default AdminaAppointmentTable;
