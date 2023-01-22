import mongoose from "mongoose";

// here we are specifcying that each post must have these things 
var Schema = mongoose.Schema
const Users = mongoose.model('users', 
               new Schema({ id: Number, first_name: String, last_name: String, phone: String, email: String, password: String, salary: String, gender: String, age: Number, family_status: String, country: String, province: String, profession: String, highest_education: String, responsibility_extra_family_members: Number}), 
               'users');     // collection name

               
export default Users;