import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      {/* protected */}
      <Route path="/login">
        <Auth />
      </Route>
      <PrivateRoute path="/">
        <Navbar />
      </PrivateRoute>
    </BrowserRouter>
  );
};

export default App;
