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


const avg_aest = targetedAverage.aesthetics.average;
const communications = targetedAverage.communications.average;
const food = targetedAverage.food.average;
const health = targetedAverage.health.average;
const housing = targetedAverage.housing.average;
const other = targetedAverage.other.average;
const subscriptions = targetedAverage.subscriptions.average;
const transport = targetedAverage.transport.average;

const monthlyUserExpenses = [
  { x: "housing", y: housing }, { x: "communications", y: communications },
  { x: "transport", y: transport }, { x: "food", y: food },
  { x: "aesthetics", y: avg_aest }, { x: "subscriptions", y: subscriptions },
  { x: "health", y: health }, { x: "other", y: other}
]

    return (

      <div>

      <Navbar></Navbar>
        <Grid container >
        <Grid item xs={6}> 
        <DonutGraph monthlyUserExpenses={monthlyUserExpenses} />
        <Grid direction="column" item container xs spacing={2} justifyContent="center" alignItems="center">
        <Button color="primary" variant="contained"  onClick={() => handleClick()}  >
            Optimize
          </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          2
        </Grid>
   </Grid>
</div>
    )

}

export default Optimize