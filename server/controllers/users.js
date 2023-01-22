import mongoose from "mongoose";
import Users from "../models/users.js";
import Expenses from "../models/expenses.js";



export const getUsers = async (req, res) => {

    try {
        const AllUsers = await Users.find();
        res.status(200).json(AllUsers);
    } catch (error) {

        res.status(404).json({message: error.message});
        
    }
   
 
}

export const getUserExpenses = async (req, res) => {
    console.log(req.param);
    try {
        console.log('Get user expenses')
        //Get all the user expenses based on the schema
        console.log(req);
        // const userExpenses = await Expenses.findById(1)
        
        //response 200

    } catch (error) {

        res.status(404).json({message: error.message});
        
    }
   
 
}
