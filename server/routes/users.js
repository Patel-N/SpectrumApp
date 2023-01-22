import express from 'express';
import { getUsers } from '../controllers/users.js';

// sets up an instance of our router 
const router = express.Router();

export default router; 


//--- ADDING ROUTES ---

// callback function which will be executed  once someone visits localhost:5000/
router.get('/', getUsers);