import React from 'react';
import {Grid} from  '@material-ui/core'
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

const Profile = () => {
    const { id } = useParams()
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
      //OPTIMIZATION
      function handleClick() {
        console.log('e');
      
      }

    return (
      <div>

      <Navbar></Navbar>
      <br/><br/><br/><br/>
                <Grid container >
                     
                            <Grid item xs={6}> 
                            <Grid container spacing={0} justifyContent="center" alignItems="center">
                                <h1> User {id}</h1>
                                </Grid>
                            <Grid direction="column" item container xs spacing={2} justifyContent="center" alignItems="center">
                            
                            </Grid>
                            </Grid>
                            
                            <Grid item xs={6}>
                            <Grid container spacing={0} justifyContent="center" alignItems="center">
                                    <div  >Your Spectrum Averages</div>
                                </Grid>
                            <CompareGraph monthlyUserExpenses={monthlyUserExpenses} monthlyAverageExpenses={monthlyAverageExpenses} />
                            </Grid>
                    </Grid>
        </div>

    )

}

export default Profile