import express from 'express';
import { getUsers, getUserExpenses, getUserExpensesById } from '../controllers/users.js';
import { signin } from '../controllers/auth.js';

// sets up an instance of our router 
const router = express.Router();

export default router; 


//--- ADDING ROUTES ---

// callback function which will be executed  once someone visits localhost:5000/
router.get('/', getUsers);

router.post('/expenses', getUserExpenses);

router.post('/expenses/id', getUserExpensesById);

router.post('/signin', signin);