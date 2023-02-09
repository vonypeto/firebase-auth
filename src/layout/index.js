import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      THIS IS LAYOUT
      <Outlet />
    </div>
  );
};

export default Layout;
