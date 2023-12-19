import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReservationCalender from '../components/Reservation/ReservationCalender';
import ReservationComplete from '../components/Reservation/ReservationComplete';
import ReservationFinalCheck from '../components/Reservation/ReservationFinalCheck';
import ReservationInformCheck from '../components/Reservation/ReservationInformCheck';
import ReservationPayment from '../components/Reservation/ReservationPayment';
import Home from './Home/Home';
import Root from './Root/Root';
import Search from './Search/Search';
import Store from './Store/Store';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/store',
          element: <Search />,
        },
        {
          path: '/store/:storeId',
          element: <Store />,
          children: [
            {
              path: 'store/:storeId/reservation1',
              element: <ReservationCalender />,
            },
            {
              path: 'store/:storeId/reservation2',
              element: <ReservationInformCheck />,
            },
            {
              path: 'store/:storeId/payment',
              element: <ReservationPayment />,
              children: [
                {
                  path: 'store/:storeId/payment/check',
                  element: <ReservationFinalCheck />,
                },
                {
                  path: 'store/:storeId/payment/complete',
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
