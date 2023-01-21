import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container} from '@material-ui/core';

import Auth from './components/Auth/Auth'

const App =  () => {


    return (

        <BrowserRouter>
            <Container maxWidth="lg">
                <Switch>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>

);

}

export default App;