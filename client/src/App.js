import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import {Container} from '@material-ui/core';
import Home from './components/Home/Home.js';
import { styled, useTheme } from '@mui/material/styles';
import { ProSidebarProvider } from "react-pro-sidebar";

const App = () => {
  return (
    <BrowserRouter>
      {/* protected */}
      <Route path="/login">
        <Auth />
      </Route>
      <Route path='/' exact component={Navbar}/>
    </BrowserRouter>
  );
};

export default App;
