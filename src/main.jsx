import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";

import guestRoutes from "./routes/guestRoutes";
import mainRoutes from "./routes/mainRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import reduxStore from "./store/store";
//create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([...guestRoutes, ...mainRoutes]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
