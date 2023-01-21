import axios from 'axios'; 

// we will need to specify our url which will be pointing to our back end route

const API = axios.create({baseURL:  'http://localhost:5000'});


// api request to get users

export const fetchPosts = () => API.get('/users');