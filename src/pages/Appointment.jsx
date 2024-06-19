import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import AdminaAppointmentTable from "../components/AdminaAppointmentTable";

const Appointment = () => {
  const userRole = localStorage.getItem("role");
  return (
    <>
      {userRole === "patient" ? (
        <AppointmentForm />
      ) : (
        <AdminaAppointmentTable />
      )}
    </>
  );
};

export default Appointment;
