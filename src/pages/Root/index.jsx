import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Root() {
  return (
    <div className="page-wrapper">
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
}

export default Root;
