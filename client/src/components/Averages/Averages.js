import React, { useState, useEffect } from 'react';
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
import { getFilteredUsers } from '../Optimize/Filter';
import clsx from "clsx";
import { getUsers, getUserExpenses } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';

const Average = () => {

  const dispatch = useDispatch();

  const { id } = useParams()




  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserExpenses(userId))
  }, [dispatch]);

  
  const currentUser = JSON.parse(localStorage.getItem("profile")).result;
  const currentUserExpenses = JSON.parse(localStorage.getItem("userExpenses")).result;

  const [userId, setUserId] = useState({ id: currentUser.id });

  // basically allows us to extract data from Redux store state, using selector function
  const users = useSelector((state) => state.users);
  users.shift();
  const targetedAverage = getFilteredUsers(users);

  // const currentUserExpensesCommunicationsAverage = (currentUserExpenses.communications.internet + currentUserExpenses.communications.cable + currentUserExpenses.communications.cell);
  // const currentUserExpensesTransportAverage = (currentUserExpenses.transport.car + currentUserExpenses.transport.public);
  // const currentUserExpensesFoodAverage = (currentUserExpenses.food.restaurants + currentUserExpenses.food.supermarket);
  // const currentUserExpensesAestheticsAverage = (currentUserExpenses.aesthetics.body + currentUserExpenses.aesthetics.clothes);
  // const currentUserExpensesSubscriptionsAverage = (currentUserExpenses.subscriptions.music + currentUserExpenses.subscriptions.gym + currentUserExpenses.subscriptions.others);
  // const currentUserExpensesHealthAverage = (currentUserExpenses.health.prescriptions + currentUserExpenses.health.appointments);
  // const currentUserExpensesOtherAverage = currentUserExpenses.other;
  
  const monthlyUserExpensesHousing = [
    { x: "mortgage", y: currentUserExpenses.housing.mortgage },
    { x: "rent", y: currentUserExpenses.housing.rent },
    { x: "utilities", y: currentUserExpenses.housing.utilities },
  ]
  
  const monthlyAverageExpensesHousing = [
    { x: "mortgage", y: targetedAverage.housing.mortgage }, 
    { x: "rent", y: targetedAverage.housing.rent },
    { x: "utilities", y: targetedAverage.housing.utilities }
  ]
  console.log("TARGETED" + targetedAverage)
  //OPTIMIZATION
  function handleClick() {
    console.log('e');

  }

  return (
    <div>

      <Navbar></Navbar>
      <br /><br /><br /><br />
      <Grid container >
        <h1>Housing</h1>
        <CompareGraph monthlyUserExpenses={monthlyUserExpensesHousing} monthlyAverageExpenses={monthlyAverageExpensesHousing} />
      </Grid>
    </div>

  )

}

export default Average