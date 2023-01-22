import React, {useState, useEffect} from 'react';
import {Grid} from  '@material-ui/core'
import {useDispatch} from 'react-redux';
import { getFilteredUsers } from './Filter';
import { getUsers } from '../../actions/users';
import { useSelector } from 'react-redux';

// const [queryInfo, setQueryInfo] = useState({ salary:0, country: '', province: ''});

const Optimize = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = useSelector((state) => state.users);

    const filteredUsers = getFilteredUsers(users);

    return (
        <Grid 
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justify='center'
            style={{minHeight: '100vh'}}
            fontColor='red'>
            Hello!!!!
                
        </Grid>

    )

}



export default Optimize