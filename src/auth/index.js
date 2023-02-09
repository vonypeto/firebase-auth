import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLogin from "./login";

export const AuthLayout = () => {
  return (
    <>
      <AuthLogin />
    </>
  );
};

export default AuthLayout;
