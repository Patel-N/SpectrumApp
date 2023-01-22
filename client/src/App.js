import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import { styled, useTheme } from '@mui/material/styles';
import { ProSidebarProvider } from "react-pro-sidebar";
import Auth from './components/Auth/Auth'

import Navbar from './components/Navbar/Navbar';

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
