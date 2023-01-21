import React, {useState, useEffect } from 'react'
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
const classes = useStyles();
const history = useHistory();
const location = useLocation();
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));





  return (
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>   
              
                </div>

                <Toolbar className={classes.toolbar}>
                {user ?  (

                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.image}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" >Logout</Button>

                    </div>

                ) : (

                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>


                )}
                </Toolbar>

                   
            </AppBar>
  )
}

export default Navbar
