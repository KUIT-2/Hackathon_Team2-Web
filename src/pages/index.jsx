import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReservationCalender from "../components/Reservation/ReservationCalender";
import ReservationComplete from "../components/Reservation/ReservationComplete";
import ReservationFinalCheck from "../components/Reservation/ReservationFinalCheck";
import ReservationInformCheck from "../components/Reservation/ReservationInformCheck";
import ReservationPayment from "../components/Reservation/ReservationPayment";
import Home from "./Home/Home";
import Root from "./Root/Root";
import Search from "./Search/Search";
import Store from "./Store/Store";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/store/:storeId",
          element: <Store />,
          children: [
            {
              path: "reservation1",
              element: <ReservationCalender />,
            },
            {
              path: "reservation2",
              element: <ReservationInformCheck />,
            },
            {
              path: "payment",
              element: <ReservationPayment />,
              children: [
                {
                  path: "check",
                  element: <ReservationFinalCheck />,
                },
                {
                  path: "complete",
                  element: <ReservationComplete />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
