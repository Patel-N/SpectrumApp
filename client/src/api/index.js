import axios from 'axios'; 

// we will need to specify our url which will be pointing to our back end route
const API = axios.create({baseURL:  'http://localhost:5000'});

// api request to get users
export const fetchUsers = () => API.get('/users');

export const signIn = (formData) => API.post('/users/signin', formData);
