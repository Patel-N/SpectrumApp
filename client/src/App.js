import React, { useState } from "react";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { styled, useTheme } from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from '@material-ui/core';
import Home from './components/Home/Home.js';
import { ProSidebarProvider } from "react-pro-sidebar";
import Optimize from './components/Optimize/Optimize'
import Profiles from './components/Profiles/Profiles'


const App =  () => {
    
    
    return (

        
        <BrowserRouter>
        <Navbar></Navbar>
        <Container maxidth="lg" p>
             <Routes>
                 <Route path="/auth" exact element={<Auth/>}/>
                 <Route path="/" exact element={<Home/>}/>
                 <Route path="/optimize" exact element={<Optimize/>}/>
                 <Route path="/profiles" exact element={<Profiles/>}/>
             </Routes>
        </Container>
     </BrowserRouter>


);


};

export default App;
