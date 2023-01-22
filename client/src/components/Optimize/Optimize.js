import React from 'react';
import {Grid} from  '@material-ui/core'
import DonutGraph from '../../components/Graphs/DonutGraph'
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  createTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";

const Optimize = () => {
    const monthlyUserExpenses = [
        { x: "housing", y: 1 }, { x: "communications", y: 4 },
        { x: "transport", y: 5 }, { x: "food", y: 7 },
        { x: "aesthetics", y: 9 }, { x: "subscriptions", y: 11 },
        { x: "health", y: 13 }, { x: "other", y: 14 }
    ]
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

    return (
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

    )

}

export default Optimize