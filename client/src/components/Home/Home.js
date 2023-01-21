import React, { useState, useEffect } from 'react'
import {Container, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';


const Home = () => {




  return (
        <Grow in>
            <Container> 
                <Grid   container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}> 

                       Hello

                    </Grid>
                    <Grid item xs={12} sm={4}>

                        

                    </Grid>
                </Grid>
            </Container>
        </Grow>

         );
}

export default Home
