import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from '@material-ui/core';
import { ProSidebarProvider } from "react-pro-sidebar";
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import Optimize from './components/Optimize/Optimize'
import Profiles from './components/Profiles/Profiles'
import Navbar from './components/Navbar/Navbar';

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

}

export default App;