import React from 'react';
import {TextField, Grid, InputAdornment, Select, MenuItem, IconButton} from '@material-ui/core';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import WorkIcon from '@mui/icons-material/Work';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SchoolIcon from '@mui/icons-material/School';
import PaidIcon from '@mui/icons-material/Paid';
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  createTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";
const User = ({label,name, handleChange, autoFocus, type,half, handleShowPassword}) => {

    const navigate = useNavigate();

  function handleClick(index) {
        navigate("/");
    
  
  }
    const customTheme = createTheme({
        palette: {
          primary: lightGreen,
          secondary: lightGreen
        }
      });
    const currentUser = JSON.parse(localStorage.getItem("profile")).result;
    console.log(currentUser);
  return (

    

    <Grid 
    container 
    spacing={0}
    direction="column"
    alignItems="center"
    justify='center'
    style={{minHeight: '100vh'}}
    fontColor='red'>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <div>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          First Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          defaultValue = {currentUser.first_name}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        
      </FormControl>
      
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Last Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          defaultValue = {currentUser.last_name}
          
        />
              </FormControl>
              </div>
              <div>
              <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Profession
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          defaultValue = {currentUser.profession}
          startAdornment={
            <InputAdornment position="start">
              <WorkIcon />
            </InputAdornment>
          }
        />
        
      </FormControl>
      
      </div>
      <div>
      <FormControl >
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentUser.country}
                    label="Country"
                    onChange={handleChange}
                    startAdornment={
                        <InputAdornment position="start">
                          <PublicIcon />
                        </InputAdornment>
                      }
                >
                    <MenuItem value={'Canada'}>Canada</MenuItem>
                    <MenuItem value={'USA'}>USA</MenuItem>
                </Select>
                </FormControl>
      
      <FormControl >
                <InputLabel id="demo-simple-select-label">Province</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentUser.province}
                    label="Province"
                    onChange={handleChange}
                    startAdornment={
                        <InputAdornment position="start">
                          <HomeWorkIcon />
                        </InputAdornment>
                      }
                >
                    <MenuItem value={'Quebec'}>Quebec</MenuItem>
                    <MenuItem value={'Ontario'}>Ontario</MenuItem>
                    <MenuItem value={'Manitoba'}>Manitoba</MenuItem>
                    <MenuItem value={'Saskatchewan'}>Saskatchewan</MenuItem>
                    <MenuItem value={'Alberta'}>Alberta</MenuItem>
                    <MenuItem value={'British Columbia'}>British Columbia</MenuItem>
                    <MenuItem value={'New Brunswick'}>New Brunswick</MenuItem>
                    <MenuItem value={'Yukon'}>Yukon</MenuItem>
                    <MenuItem value={'Newfoundland and Labrador'}>Newfoundland and Labrador</MenuItem>
                    <MenuItem value={'Nova Scotia'}>Nova Scotia</MenuItem>
                    <MenuItem value={'Prince Edward Island'}>Prince Edward Island</MenuItem>
                    <MenuItem value={'Northwest Territories'}>Northwest Territories</MenuItem>
                </Select>
                </FormControl>
      
      </div>
      <div>
      <FormControl >
                <InputLabel id="demo-simple-select-label">Highest Educatiom</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentUser.highest_education}
                    label="Highest Education"
                    onChange={handleChange}
                    startAdornment={
                        <InputAdornment position="start">
                          <SchoolIcon />
                        </InputAdornment>
                      }
                >
                    <MenuItem value={'None'}>None</MenuItem>
                    <MenuItem value={'high-school'}>High School</MenuItem>
                    <MenuItem value={'Cegep'}>Cegep</MenuItem>
                    <MenuItem value={'Bachelor'}>Bachelor</MenuItem>
                    <MenuItem value={'Master'}>Master</MenuItem>
                    <MenuItem value={'PhD'}>PhD</MenuItem>
                    
                </Select>
                </FormControl>
      
      </div>
      <div>

      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Salary
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          defaultValue = {currentUser.salary}
          startAdornment={
            <InputAdornment position="start">
              <PaidIcon />
            </InputAdornment>
          }
        />
        
      </FormControl>
                 
        
      </div>
      
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Button color="primary" variant="contained" onClick={() => handleClick('3')}   >
            Save
          </Button>
      </Box>
    </Box>
    </Grid>
  )
}

export default User
