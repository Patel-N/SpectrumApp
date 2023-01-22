import * as api from '../api/index.js';


export const signin = (formData, history) => async (dispatch) => {

    try {
        // log in user...
        console.log('In action')
        // get user data from api call
        const { data } = await api.signIn(formData);

        console.log('data received from api: ');
        console.log(data);

        // dispatch it to reducers
        dispatch({type: 'AUTH', data});

        history('/');

    } catch (error) {
        console.log(error)

    }
}