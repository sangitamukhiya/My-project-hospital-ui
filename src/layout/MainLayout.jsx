import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomSnackbars from "../components/CustomSnackbar";

const MainLayout = () => {
  return (
    <>
      <CustomSnackbars />
      <Header />
      <Outlet />

      {/* outlet path ma depend hunxa */}
      <Footer />
    </>
  );
};

export default MainLayout;
