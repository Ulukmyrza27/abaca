import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Details from "../Details/Details";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/details/:id",
      element: <Details />,
      id: 2,
    },
  ];
  //   let ADMIN_ROUTES = [
  //     {
  //       link: "/admin",
  //       element: <AdminPage />,
  //       id: 1,
  //     },
  //     {
  //       link: "/edit/:id",
  //       element: <EditProduct />,
  //       id: 2,
  //     },
  //   ];
  return (
    <BrowserRouter>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "97vh",
        }}
      >
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {/* {ADMIN_ROUTES.map((item) => (
            <Route
              path={item.link}
              element={
                currentUser === ADMIN_EMAIL ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))} */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
