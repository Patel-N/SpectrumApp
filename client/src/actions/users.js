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
        const { userExpenseData } = await api.fetchUserExpenses(userId.id);

        dispatch({type: "FETCH_USER_EXPENSES", payload: userId})
    } catch (error) {
        console.log(error.message)
    }
}