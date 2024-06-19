import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomSnackbars from "../components/CustomSnackbar";

const MinimumLayout = () => {
  return (
    <>
      <CustomSnackbars />
      <Header />
      <Outlet />
      <Header />
      <Footer />
    </>
  );
};

export default MinimumLayout;
