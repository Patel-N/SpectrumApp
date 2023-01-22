import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import { styled, useTheme } from '@mui/material/styles';
import { ProSidebarProvider } from "react-pro-sidebar";
import Auth from './components/Auth/Auth'

import Navbar from './components/Navbar/Navbar';

const App =  () => {
    
    
    return (

        
        <BrowserRouter>
        <Navbar></Navbar>
        <Container maxidth="lg">
             <Switch>
                 <Route path="/auth" exact component={Auth}/>
                 <Route path="/" exact component={Home} />
             </Switch>
        </Container>
     </BrowserRouter>


    );


}

export default App;