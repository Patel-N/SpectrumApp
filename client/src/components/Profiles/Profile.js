import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import CompareGraph from '../../components/Graphs/CompareGraph'
import { useParams } from "react-router-dom"
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  createTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";
import Navbar from "../Navbar/Navbar.js"
import { getUserExpenseById } from '../../actions/users';

import { getFilteredUsers } from '../Optimize/Filter';
import clsx from "clsx";
import { getUsers, getUserExpenses } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';


const Profile = () => {

  const { id } = useParams()


  // const classes = useStyles();
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("profile")).result;
  const otherUserExpense = JSON.parse(localStorage.getItem("expenseAvg")).result;
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

  dispatch(getUserExpenseById(id));
  //userExpenses -- main user
  //expenseAvg -- other users

  
    const currentUserExpensesHousingAverage = (currentUserExpenses.housing.mortgage + currentUserExpenses.housing.rent + currentUserExpenses.housing.utilities);
    const currentUserExpensesCommunicationsAverage = (currentUserExpenses.communications.internet + currentUserExpenses.communications.cable + currentUserExpenses.communications.cell);
    const currentUserExpensesTransportAverage = (currentUserExpenses.transport.car + currentUserExpenses.transport.public);
    const currentUserExpensesFoodAverage = (currentUserExpenses.food.restaurants + currentUserExpenses.food.supermarket);
    const currentUserExpensesAestheticsAverage = (currentUserExpenses.aesthetics.body + currentUserExpenses.aesthetics.clothes);
    const currentUserExpensesSubscriptionsAverage = (currentUserExpenses.subscriptions.music + currentUserExpenses.subscriptions.gym + currentUserExpenses.subscriptions.others);
    const currentUserExpensesHealthAverage = (currentUserExpenses.health.prescriptions + currentUserExpenses.health.appointments);
    const currentUserExpensesOtherAverage = currentUserExpenses.other;

    
    const otherUserExpensesHousingAverage = (otherUserExpense.housing.mortgage + otherUserExpense.housing.rent + otherUserExpense.housing.utilities);
    const otherUserExpensesCommunicationsAverage = (otherUserExpense.communications.internet + otherUserExpense.communications.cable + otherUserExpense.communications.cell);
    const otherUserExpensesTransportAverage = (otherUserExpense.transport.car + otherUserExpense.transport.public);
    const otherUserExpensesFoodAverage = (otherUserExpense.food.restaurants + otherUserExpense.food.supermarket);
    const otherUserExpensesAestheticsAverage = (otherUserExpense.aesthetics.body + otherUserExpense.aesthetics.clothes);
    const otherUserExpensesSubscriptionsAverage = (otherUserExpense.subscriptions.music + otherUserExpense.subscriptions.gym + otherUserExpense.subscriptions.others);
    const otherUserExpensesHealthAverage = (otherUserExpense.health.prescriptions + otherUserExpense.health.appointments);
    const otherUserExpensesOtherAverage = otherUserExpense.other;


  const monthlyUserExpenses = [
    { x: "housing", y: currentUserExpensesHousingAverage }, { x: "communications", y: currentUserExpensesCommunicationsAverage },
    { x: "transport", y: currentUserExpensesTransportAverage }, { x: "food", y: currentUserExpensesFoodAverage },
    { x: "aesthetics", y: currentUserExpensesAestheticsAverage }, { x: "subscriptions", y: currentUserExpensesSubscriptionsAverage },
    { x: "health", y: currentUserExpensesHealthAverage }, { x: "other", y: currentUserExpensesOtherAverage }
  ]

  const monthlyAverageExpenses = [
    { x: "housing", y: otherUserExpensesHousingAverage }, { x: "communications", y: otherUserExpensesCommunicationsAverage },
    { x: "transport", y: otherUserExpensesTransportAverage }, { x: "food", y: otherUserExpensesFoodAverage },
    { x: "aesthetics", y: otherUserExpensesAestheticsAverage }, { x: "subscriptions", y: otherUserExpensesSubscriptionsAverage },
    { x: "health", y: otherUserExpensesHealthAverage }, { x: "other", y: otherUserExpensesOtherAverage }
  ]
  //OPTIMIZATION
  function handleClick() {
    console.log('e');

  }

  return (
    <div>

      <Navbar></Navbar>
      <br /><br /><br /><br />
      <Grid container >

        <Grid item xs={11}>
          <Grid container spacing={0} justifyContent="center" alignItems="center">
            <h1> Your data compared to User {id}</h1>
          </Grid>

          <Grid container spacing={0} justifyContent="center" alignItems="center">
            <div>Your Spectrum Averages</div>
          </Grid>
          <CompareGraph monthlyUserExpenses={monthlyUserExpenses} monthlyAverageExpenses={monthlyAverageExpenses} />
        </Grid>
      </Grid>
    </div>

  )

}

export default Profile