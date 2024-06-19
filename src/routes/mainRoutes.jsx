import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Appointment from "../pages/Appointment";
import DoctorList from "../pages/DoctorList";
import DoctorDetails from "../pages/DoctorDetails";
import AddDoctor from "../pages/AddDoctor";
import EditDoctor from "../pages/EditDoctor";
import Home from "../pages/Home";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: "doctorList",
        element: <DoctorList />,
      },
      {
        path: "doctor-details/:id",
        element: <DoctorDetails />,
      },
      {
        path: "add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "doctor-edit/:id",
        element: <EditDoctor />,
      },
    ],
  },
];

export default mainRoutes;
