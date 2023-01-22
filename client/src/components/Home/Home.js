import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import chart from '../../images/donut-chart-1.png';
import area from '../../images/area.png';
import bars from '../../images/bars.png';
import useStyles from './styles';
import DonutGraph from '../../components/Graphs/DonutGraph'
import CompareGraph from '../../components/Graphs/CompareGraph'

import clsx from "clsx";
import { getUsers, getUserExpenses } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();


    const currentUser = JSON.parse(localStorage.getItem("profile"));
    const [userId, setUserId] = useState({id:currentUser.result.id});
       


    useEffect(() => {
      dispatch(getUsers());
      dispatch(getUserExpenses(userId))
    }, [dispatch]);

  // basically allows us to extract data from Redux store state, using selector function
  const users = useSelector((state) => state.users)
  console.log(users)

    const data = ["Rent", "Transport", "Your Mom",];

    const Demo = ({ items }) => (
        <ul>
            {
                items.map(key => (
                    <li key={key}>{key}</li>
                ))
            }
        </ul>
    );

    const monthlyUserExpenses = [
        { x: "housing", y: 1 }, { x: "communications", y: 4 },
        { x: "transport", y: 5 }, { x: "food", y: 7 },
        { x: "aesthetics", y: 9 }, { x: "subscriptions", y: 11 },
        { x: "health", y: 13 }, { x: "other", y: 14 }
    ]

    const monthlyAverageExpenses = [
        { x: "housing", y: 2 }, { x: "communications", y: 3 },
        { x: "transport", y: 6 }, { x: "food", y: 2 },
        { x: "aesthetics", y: 11 }, { x: "subscriptions", y: 6 },
        { x: "health", y: 13 }, { x: "other", y: 12 }
    ]

    return (
        <Grow in>
            <Container> 
            {/* <Grid item container direction="column" xs spacing={2} justifyContent="center" alignItems="center">
            <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
                    
                    <Grid item container direction="column" xs spacing={2} justifyContent="center" alignItems="center">
                    
                            <Grid item container direction="column" xs spacing={4} justifyContent="center" alignItems="center">

                            <Grid item xs>
                                <Grid container spacing={0} justifyContent="center" alignItems="center">
                                    <div className={classes.container} >Your Monthly Budget</div>
                                </Grid>
                                <Grid container spacing={0} justifyContent="center" alignItems="center">
                                    <img className={classes.image} src={area} alt="chart" height={260} />
                                </Grid>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                    <Grid item container direction="column" xs spacing={2} justifyContent="center" alignItems="center">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                            <Grid item xs >
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
                        </Grid>
                        <Grid item xs>
                            <Grid item container direction="column" xs spacing={2}>
                                <Grid item xs>
                                    <Grid container spacing={0} justifyContent="center" alignItems="center">
                                        <div className={classes.container} >Your Spendings</div>
                                    </Grid>
                                    <br />
                                    <Grid container spacing={0} justifyContent="center" alignItems="center">

                                        <img className={classes.image} src={chart} alt="chart" height={260} />
                                    </Grid>
                                    <br />
                                    <Grid container spacing={0} justifyContent="center" alignItems="center">
                                        <div className={classes.container} >Top 3 </div>
                                    </Grid>
                                    <Grid container spacing={0} justifyContent="center" alignItems="center">
                                        <Demo items={data} />
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/><br/><br/><br/><br/> */}
                <DonutGraph monthlyUserExpenses={monthlyUserExpenses} />
                <CompareGraph monthlyUserExpenses={monthlyUserExpenses} monthlyAverageExpenses={monthlyAverageExpenses} />
            </Container>

        </Grow>


    );
}

export default Home
