const initialState = {
    allExpenses: []
}

const ExpenseReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_USER_EXPENSES_BY_ID':
            console.log('in expense');
            return {...state, allExpenses: [...state.allExpenses, action.data]};
        default:
            return { ...state };
    }
}

export default ExpenseReducer