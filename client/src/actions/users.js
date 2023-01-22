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

export const getUserExpenses = (userId) => async (dispatch) => {

    try {
        console.log('here in actions =>', userId);
        const { data } = await api.fetchUserExpenses(userId);
        
        console.log(data);

        dispatch({type: "FETCH_USER_EXPENSES", data})
    } catch (error) {
        console.log(error.message)
    }
}