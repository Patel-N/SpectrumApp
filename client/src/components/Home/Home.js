import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import chart from '../../images/donut-chart-1.png';
import area from '../../images/area.png';
import bars from '../../images/bars.png';
import useStyles from './styles';
import DonutGraph from '../../components/Graphs/DonutGraph'
import CompareGraph from '../../components/Graphs/CompareGraph'
import Navbar from "../Navbar/Navbar.js"

import { getFilteredUsers } from '../Optimize/Filter';
import clsx from "clsx";
import { getUsers, getUserExpenses } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const currentUser = JSON.parse(localStorage.getItem("profile")).result;
    const currentUserExpenses = JSON.parse(localStorage.getItem("userExpenses")).result;
    const [userId, setUserId] = useState({ id: currentUser.id });


    useEffect(() => {
        dispatch(getUsers());
        dispatch(getUserExpenses(userId))
    }, [dispatch]);

    // basically allows us to extract data from Redux store state, using selector function
    const users = useSelector((state) => state.users);
    users.shift();
    const targetedAverage = getFilteredUsers(users);

    const Demo = ({ items }) => (
        <ul>
            {
                items.map(key => (
                    <li key={key}>{key}</li>
                ))
            }
        </ul>
    );

    const currentUserExpensesHousingAverage = (currentUserExpenses.housing.mortgage + currentUserExpenses.housing.rent + currentUserExpenses.housing.utilities);
    const currentUserExpensesCommunicationsAverage = (currentUserExpenses.communications.internet + currentUserExpenses.communications.cable + currentUserExpenses.communications.cell);
    const currentUserExpensesTransportAverage = (currentUserExpenses.transport.car + currentUserExpenses.transport.public);
    const currentUserExpensesFoodAverage = (currentUserExpenses.food.restaurants + currentUserExpenses.food.supermarket);
    const currentUserExpensesAestheticsAverage = (currentUserExpenses.aesthetics.body + currentUserExpenses.aesthetics.clothes);
    const currentUserExpensesSubscriptionsAverage = (currentUserExpenses.subscriptions.music + currentUserExpenses.subscriptions.gym + currentUserExpenses.subscriptions.others);
    const currentUserExpensesHealthAverage = (currentUserExpenses.health.prescriptions + currentUserExpenses.health.appointments);
    const currentUserExpensesOtherAverage = currentUserExpenses.other;

    const monthlyUserExpenses = [
        { x: "housing", y: currentUserExpensesHousingAverage }, 
        { x: "communications", y:currentUserExpensesCommunicationsAverage},
        { x: "transport", y: currentUserExpensesTransportAverage }, 
        { x: "food", y: currentUserExpensesFoodAverage },
        { x: "aesthetics", y: currentUserExpensesAestheticsAverage }, 
        { x: "subscriptions", y:currentUserExpensesSubscriptionsAverage},
        { x: "health", y: currentUserExpensesHealthAverage },
        { x: "other", y: currentUserExpensesOtherAverage}
    ]

    const monthlyAverageExpenses = [
        { x: "housing", y: targetedAverage.housing.average }, { x: "communications", y: targetedAverage.communications.average },
        { x: "transport", y: targetedAverage.transport.average }, { x: "food", y: targetedAverage.food.average },
        { x: "aesthetics", y: targetedAverage.aesthetics.average }, { x: "subscriptions", y: targetedAverage.subscriptions.average },
        { x: "health", y: targetedAverage.health.average }, { x: "other", y: targetedAverage.other.average }
    ]

    return (

        <div>

            <Navbar></Navbar>

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

                    <Grid container >
                        <Grid item xs={6}>
                            <Grid container spacing={0} justifyContent="center" alignItems="center">
                                <div className={classes.container} >Your Spendings</div>
                            </Grid>
                            <DonutGraph monthlyUserExpenses={monthlyUserExpenses} />
                            <Grid direction="column" item container xs spacing={2} justifyContent="center" alignItems="center">

                            </Grid>
                        </Grid>

                        <Grid item xs={6}>
                            <Grid container spacing={0} justifyContent="center" alignItems="center">
                                <div className={classes.container} >Your Spectrum Averages</div>
                            </Grid>
                            <CompareGraph monthlyUserExpenses={monthlyUserExpenses} monthlyAverageExpenses={monthlyAverageExpenses} />
                        </Grid>
                    </Grid>


                </Container>

            </Grow>
        </div>

    );
}

export default Home
