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

    try {
        console.log('Get user expenses')
        const {id} = req.body;
        //Get all the user expenses based on the schema
        const userExpenses = await Expenses.findOne({id:id});
        
        //response 200
        res.status(200).json({result:userExpenses});
    } catch (error) {

        res.status(404).json({message: error.message});
        
    }
}

export const getUserExpensesById = async (req, res) => {
    try {
        console.log('Get user expenses by _id')

        const {_id} = req.body;

        console.log(_id);
        //Get all the user expenses based on the schema
        const userExpenses = await Expenses.findOne({user_id:_id});
        console.log(userExpenses);
        //response 200
        res.status(200).json({result:userExpenses});
    } catch (error) {
        res.status(404).json({message: error.message});
    }


}
