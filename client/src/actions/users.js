import * as api from '../api';

// Action Creators  --> functions that return acions

export const getUsers = () => async (dispatch) => {
    try {

        const { data } = await api.fetchUsers();
        
        dispatch({type: "FETCH_ALL", payload: data});

       
    } catch (error) {

        console.log(error.message)
        
       
    }

}