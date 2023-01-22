import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container} from '@material-ui/core';
import { ProSidebarProvider } from "react-pro-sidebar";
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';

const App =  () => {
    
    
    return (

        
        <BrowserRouter>
        <Navbar></Navbar>
        <Container maxidth="lg">
             <Switch>
                 <Route path="/auth" exact component={Auth}/>
             </Switch>
        </Container>
     </BrowserRouter>


);

}

export default App;