const authReducer = (state = { authData: null}, action) => {

console.log(action.type);
switch (action.type) {
        case 'AUTH':
            console.log('In reducer')
            //getting and setting user in local storage
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
            return { ...state, authData: action?.data };

        default:
            return state;
    }

}

export default authReducer;