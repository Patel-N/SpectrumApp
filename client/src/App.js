import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';

const App =  () => {


    return(


            
                <BrowserRouter>
                   <Container maxidth="lg">

                    
                        
                        <Switch>
                            <Route path="/" exact component={Home} />

                        </Switch>
                        
                   </Container>
                </BrowserRouter>
         
                    
          
    );


}

export default App;