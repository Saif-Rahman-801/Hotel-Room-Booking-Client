import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rooms from "./Components/Rooms/Rooms.jsx";
import RoomDetails from "./Components/Rooms/RoomDetails.jsx";
import Review from "./Components/Review/Review.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import ErrorComponent from "./Components/Error/ErrorComponent.jsx";
import MyBookings from "./Components/MyBookings/MyBookings.jsx";
import AllReviews from "./Components/Review/AllReviews.jsx";
import AboutUs from "./Components/About/AboutUs.jsx";
import TestimonialC from "./Components/Home/TestimonialC.jsx";
import ContactUs from "./Components/Contact/ContactUs.jsx";
// import AboutUs from "./Components/About/AboutUs.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
        loader: () =>
          fetch("https://hotel-room-booking-server-five.vercel.app/rooms"),
      },
      {
        path: "/roomDetails/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hotel-room-booking-server-five.vercel.app/roomDetails/${params.id}`
          ),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRoute>
            <Review />
          </PrivateRoute>
        ),
      },
      {
        path: "/mybookings",
        element: <MyBookings />,
        loader: () =>
          fetch("https://hotel-room-booking-server-five.vercel.app/bookedRoom"),
      },
      {
        path: "/allreviews",
        element: <AllReviews />,
        loader: () =>
          fetch("https://hotel-room-booking-server-five.vercel.app/reviews"),
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/testimonials",
        element: <TestimonialC />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
