import React, { useState, useEffect } from 'react'
import {Container, Grow, Grid} from '@material-ui/core';
import { getUsers } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getUsers());
  }, [dispatch]);

  // basically allows us to extract data from Redux store state, using selector function
  const users = useSelector((state) => state.users)
  console.log(users)

  return (
        <Grow in>
            <Container> 
                <Grid>
             
                
                </Grid>
            </Container>
        </Grow>

         );
}

export default Home