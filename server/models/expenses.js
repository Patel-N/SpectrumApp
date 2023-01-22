import mongoose from "mongoose";

var Schema = mongoose.Schema

const Expenses = mongoose.model('expenses',
new Schema({ 
    housing: {
        utilities: Number,
        mortgage: Number,
        rent: Number
    },
    communications: {
        internet: Number,
        cable: Number,
        cell: Number
    },
    transport: {
        car: Number,
        public: Number
    }, 
    food: {
        restaurants: Number,
        supermarket: Number
    },
    aesthetics: {
        clothes: Number,
        body: Number
    }, 
    subscriptions: {
        streaming: Number,
        gym: Number,
        music: Number,
        others: Number
    },
    health: {
        prescription: Number,
        appointments: Number,
    },
    other: Number
}),
'expenses');

export default Expenses;