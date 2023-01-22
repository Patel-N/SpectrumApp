

  export default (users = [], action) => { 

    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_USER_EXPENSES':
            console.log(action);
            localStorage.setItem('userExpenses', JSON.stringify({ ...action?.data}));
            return { ...state, userExpenses: action?.data };
        case 'FETCH_USER_EXPENSES_BY_ID':
            console.log(action);
            window.localStorage.removeItem('expenseAvg');
            localStorage.setItem('expenseAvg', JSON.stringify({ ...action?.data}));
            return action.payload;
        default:
            return users;
       
    }

}