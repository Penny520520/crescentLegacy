import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Root() {
  const { pathname } = useLocation();
  return (
    <div className="page-wrapper">
      {pathname === "/thankyou" ? null : <Header />}
      <Outlet />
      <ScrollRestoration />
      {pathname === "/thankyou" ? null : <Footer />}
    </div>
  );
}

export default Root;
