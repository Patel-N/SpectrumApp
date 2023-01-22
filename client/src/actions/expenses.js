import * as api from '../api';

export const getUserExpenseById = (objectId) => async (dispatch) => {
    try {
        console.log('Fetch expense for oId', objectId)
        console.log(await api.fetchUserExpensesById({_id:objectId}));
        console.log('in expense');
        dispatch({type: "FETCH_USER_EXPENSES_BY_ID", payload})
    } catch(error) {
        console.log(error)
    }
}