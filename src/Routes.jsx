import React from "react";
import { useRoutes } from "react-router-dom";

import Menu from "pages/Menu";
import Orderonline from "pages/Orderonline";
import Homepage from "pages/Homepage";
import Reservation from "pages/Reservation";
import Contact from "pages/Contact";
import Reservationhasbeenconfirmed from './modals/Reservationhasbeenconfirmed'
import EnterDetailsReservation from "./modals/EnterDetailsReservation";
import CancelReservation from "modals/CancelReservation";
import About from "pages/About";
import Checkout from "pages/CheckOut";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import OrderPlaced from "pages/OrderConfirmed";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "orderonline",
      element: <Orderonline />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "reservation",
      element: <Reservation />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "confirmedreservation",
      element: <Reservationhasbeenconfirmed isOpen={false} />,
    },
    {
      path :'EnterDetailsReservation',
      element : <EnterDetailsReservation isOpen={false}/>
      
    },
    {
      path :'CancelReservation',
      element : <CancelReservation/>
    },
    {
      path :'aboutus',
      element : <About/>
    },
    {
      path :'checkout',
      element : <Checkout/>
    },
    {
      path :'login',
      element : <Login/>
    },
    {
      path :'signup',
      element : <SignUp/>
    },
    {
      path :'orderplaced',
      element : <OrderPlaced/>
    },
  ]);

  return element;
};

export default ProjectRoutes;
