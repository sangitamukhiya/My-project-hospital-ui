import React from "react";
import DoctorCard from "../components/DoctorCard";
import AdminDoctorList from "../components/AdminDoctorList";
import PatientList from "../components/PatientList";
const DoctorList = () => {
  const userRole = localStorage.getItem("role");

  return <>{userRole === "admin" ? <AdminDoctorList /> : <PatientList />}</>;
};

export default DoctorList;
