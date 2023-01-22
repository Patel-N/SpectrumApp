import React, { useState } from "react";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { styled, useTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from './components/Home/Home.js';
import { ProSidebarProvider } from "react-pro-sidebar";
import Optimize from './components/Optimize/Optimize'
import Profiles from './components/Profiles/Profiles'
import Profile from './components/Profiles/Profile'
import Averages from './components/Averages/Averages'
import User from './components/User/User'
import ReactDOM from 'react-dom';

const App = () => {

    return (

        <BrowserRouter>
        
            <Container maxidth="lg">
                <Routes>
                    <Route path="/" exact element={<Auth />} />
                    <Route path="/dashboard" exact element={<Home />} />
                    <Route path="/optimize" exact element={<Optimize />} />
                    <Route path="/profiles" exact element={<Profiles />} />
                    <Route path="/profiles/:id" exact element={<Profile />} />
                    <Route path="/averages" exact element={<Averages />} />
                    <Route path="/user" exact element={<User />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );


};

export default App;
