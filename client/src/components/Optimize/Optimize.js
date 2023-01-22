import React, {useState, useEffect} from 'react';
import {Grid} from  '@material-ui/core'
import DonutGraph from '../../components/Graphs/DonutGraph'
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  createTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";
import { getFilteredUsers } from './Filter';
import { getUsers } from '../../actions/users';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Navbar from "../Navbar/Navbar.js"
// const [queryInfo, setQueryInfo] = useState({ salary:0, country: '', province: ''});

const Optimize = () => {
    
    const customTheme = createTheme({
        palette: {
          primary: lightGreen,
          secondary: lightGreen
        }
      });
    
      //OPTIMIZATION
      function handleClick() {
        console.log('e');
      
      }

    const dispatch = useDispatch();

    
    
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = useSelector((state) => state.users);
users.shift();
const targetedAverage = getFilteredUsers(users);
console.log(targetedAverage);
const currentUserExpenses = JSON.parse(localStorage.getItem("userExpenses")).result;
const currentUserExpensesHousingAverage = (currentUserExpenses.housing.mortgage + currentUserExpenses.housing.rent + currentUserExpenses.housing.utilities);
    const currentUserExpensesCommunicationsAverage = (currentUserExpenses.communications.internet + currentUserExpenses.communications.cable + currentUserExpenses.communications.cell);
    const currentUserExpensesTransportAverage = (currentUserExpenses.transport.car + currentUserExpenses.transport.public);
    const currentUserExpensesFoodAverage = (currentUserExpenses.food.restaurants + currentUserExpenses.food.supermarket);
    const currentUserExpensesAestheticsAverage = (currentUserExpenses.aesthetics.body + currentUserExpenses.aesthetics.clothes);
    const currentUserExpensesSubscriptionsAverage = (currentUserExpenses.subscriptions.music + currentUserExpenses.subscriptions.gym + currentUserExpenses.subscriptions.others);
    const currentUserExpensesHealthAverage = (currentUserExpenses.health.prescriptions + currentUserExpenses.health.appointments);
    const currentUserExpensesOtherAverage = currentUserExpenses.other;


const avg_aest = Math.min(targetedAverage.aesthetics.average,currentUserExpensesAestheticsAverage);
const communications =  Math.min(targetedAverage.communications.average,currentUserExpensesCommunicationsAverage);
const food =  Math.min(targetedAverage.food.average,currentUserExpensesFoodAverage);
const health =  Math.min(targetedAverage.health.average,currentUserExpensesHealthAverage);
const housing =  Math.min(targetedAverage.housing.average, currentUserExpensesHousingAverage);
const other =  Math.min(targetedAverage.other.average, currentUserExpensesOtherAverage);
const subscriptions =  Math.min(targetedAverage.subscriptions.average, currentUserExpensesSubscriptionsAverage);
const transport =  Math.min(targetedAverage.transport.average,currentUserExpensesTransportAverage);

const saved = Math.abs( currentUserExpensesAestheticsAverage - avg_aest) + 
 Math.abs( currentUserExpensesCommunicationsAverage - communications)+
 Math.abs( currentUserExpensesFoodAverage - food)+
 Math.abs( currentUserExpensesHealthAverage - health)+
 Math.abs( currentUserExpensesHousingAverage - housing)+
 Math.abs( currentUserExpensesOtherAverage - other)+
 Math.abs( currentUserExpensesSubscriptionsAverage - subscriptions)+
 Math.abs( currentUserExpensesTransportAverage - transport);

 console.log(saved);

 const monthlyUserExpenses = [
  { x: "housing", y: currentUserExpensesHousingAverage }, { x: "communications", y: currentUserExpensesCommunicationsAverage },
  { x: "transport", y: currentUserExpensesTransportAverage }, { x: "food", y: currentUserExpensesFoodAverage },
  { x: "aesthetics", y: currentUserExpensesAestheticsAverage }, { x: "subscriptions", y: currentUserExpensesSubscriptionsAverage },
  { x: "health", y: currentUserExpensesHealthAverage }, { x: "other", y: currentUserExpensesOtherAverage}
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
      <br/><br/><br/>
        <Grid container >
        <Grid item xs={6}> 
        <Grid container spacing={0} justifyContent="center" alignItems="center">
                                    <div>Your Spendings</div>
                                </Grid>
        <DonutGraph monthlyUserExpenses={monthlyUserExpenses} />
        <Grid direction="column" item container xs spacing={2} justifyContent="center" alignItems="center">
        <Button color="primary" variant="contained"  onClick={() => handleClick()}  >
            Optimize
          </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
        <Grid item xs={6}> 
        <Grid container spacing={0} justifyContent="center" alignItems="center">
                                    <div>Your Spectrum Recommendations</div>
                                </Grid>
        <DonutGraph monthlyUserExpenses={monthlyAverageExpenses} />
        <Grid direction="column" item container xs spacing={2} justifyContent="center" alignItems="center">
        
          </Grid>
        </Grid>
        </Grid>
   </Grid>
</div>
    )

}

export default Optimize