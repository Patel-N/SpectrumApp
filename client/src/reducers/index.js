
import { combineReducers } from "redux";

import users from './users.js';
import authReducer from "./auth.js";


export default combineReducers({users, authReducer});