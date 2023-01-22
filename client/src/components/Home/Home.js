import React, { useState, useEffect } from 'react'
import {Container, Grow, Grid} from '@material-ui/core';
import chart from '../../images/donut-chart-1.png';
import area from '../../images/area.png';
import bars from '../../images/bars.png';
import useStyles from './styles';
import clsx from "clsx";
import { getUsers } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {

    const classes = useStyles();

    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getUsers());
  }, [dispatch]);

  // basically allows us to extract data from Redux store state, using selector function
  const users = useSelector((state) => state.users)
  console.log(users)

    const data = ["Rent", "Transport", "Your Mom", ];

    const Demo = ({ items }) => (
    <ul>
        {
        items.map(key => (
            <li key={key}>{key}</li>
        ))
        }
    </ul>
    );

  return (
        <Grow in>
            <Container> 
            <Grid item container direction="column" xs spacing={2}>
            <Grid container direction="row" spacing={2}>
                    
                    <Grid item container direction="column" xs spacing={2}>
                        <Grid item xs>
                                <Grid container spacing={0}   justifyContent="center" alignItems="center">
                            <div className={classes.container} >Your Monthly Budget</div>
                            </Grid>
                            <Grid container spacing={0}   justifyContent="center" alignItems="center">
                            <img className={classes.image} src={area} alt="chart" height={260}/>
                            </Grid>
                            </Grid>
                            
                        <Grid item xs>
                        <hr/>
                            <Grid item container direction="column" xs spacing={2}>
                            <Grid item xs>
                                <Grid container spacing={0}   justifyContent="center" alignItems="center">
                            <div className={classes.container} >Your Trends</div>
                            </Grid>
                            <Grid container spacing={0}   justifyContent="center" alignItems="center">
                            <img className={classes.image} src={bars} alt="chart" height={260}/>
                            </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                    <Grid item container direction="column" xs spacing={2}>
                            <Grid item xs>
                                <Grid container spacing={0}   justifyContent="center" alignItems="center">
                            <div className={classes.container} >Your Spendings</div>
                            </Grid>
                            <br/>
                            <Grid container spacing={0}   justifyContent="center" alignItems="center">
                            <img className={classes.image} src={chart} alt="chart" height={260}/>
                            </Grid>
                            <br/>
                            <Grid container spacing={0}   justifyContent="center" alignItems="center">
                            <div className={classes.container} >Top 3 </div>
                            </Grid>
                            <Grid container spacing={0}   justifyContent="center" alignItems="center">
                            <Demo items={data} />
                            </Grid>
                            
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
            </Grid>
            </Container>
        </Grow>

         );
}

export default Home
