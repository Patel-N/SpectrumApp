import React,  { useState, useEffect }  from 'react';
import MUIDataTable from "mui-datatables";
import {Container, Grow, Grid, useControlled} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { getUsers, getUserExpenses } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "../Navbar/Navbar.js"
import Profile from './Profile'

const columns = [
    {
        name: "id",
        label: "ID",
        options: {
         filter: false,
         sort: false,
        }
       },
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
    const options = {selectableRows: false ,
        onRowClick: handleClick,
      };
      const navigate = useNavigate();

      function handleClick(profile) {
        navigate('./'+profile[0])//GET ID to route
      
      }
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
        <div>

      <Navbar></Navbar>
        <Grow in>
        <Container> 
            <br/><br/><br/>
        <Grid 
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justify='center'
            tableBodyHeight ='500px'
            style={{minHeight: '100vh'}}
            fontColor='red'>
            
                <MUIDataTable
                title={"Compare Profiles"}
                onRowClick={() =>navigate('./profiles/'+data.id)}
                data={data}
                columns={columns}
                options={options}
                />
                
        </Grid>
        </Container>
        </Grow>
        </div>
    )

}

export default Profiles