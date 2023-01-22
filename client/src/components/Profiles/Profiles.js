import React,  { useState, useEffect }  from 'react';
import MUIDataTable from "mui-datatables";
import {Container, Grow, Grid} from '@material-ui/core';

import { getUsers, getUserExpenses } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';

const columns = [
    {
     name: "first_name",
     label: "Name",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "gender",
     label: "Gender",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "province",
     label: "Province",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "salary",
     label: "Salary",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
        name: "highest_education",
        label: "High Education",
        options: {
         filter: true,
         sort: true,
        }
       }
   ];

var data = [];



const Profiles = () => {
    const options = {
        filterType: 'checkbox',
      };
      const dispatch = useDispatch();
      
      
          const currentUser = JSON.parse(localStorage.getItem("profile"));
          const [userId, setUserId] = useState({id:currentUser.result.id});
             

      
          useEffect(() => {
            dispatch(getUsers());
            dispatch(getUserExpenses(userId))
          }, [dispatch]);
      
        // basically allows us to extract data from Redux store state, using selector function
        const users = useSelector((state) => state.users)
        data = users;
        console.log(users);
    return (
        <Grow in>
        <Container> 
        <Grid 
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justify='center'
            style={{minHeight: '100vh'}}
            fontColor='red'>
            
                <MUIDataTable
                title={"Employee List"}
                onCellClick={() => console.log("d")}
                data={data}
                columns={columns}
                options={options}
                />
                
        </Grid>
        </Container>
        </Grow>
    )

}

export default Profiles