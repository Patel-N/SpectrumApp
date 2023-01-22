import { useDispatch } from "react-redux";
import { getUserExpenseById } from "../../actions/users";

export function getFilteredUsers(allUsers) {

    const currentUser = JSON.parse(localStorage.getItem("profile"));

    //Needed values
    const {salary} = currentUser.result;
    const {province} = currentUser.result;
    const {highest_education} = currentUser.result;

    const firstFilter = allUsers.filter ( user => Number(user.salary.replace(/[^0-9.-]+/g,"")) >= (Number(salary.replace(/[^0-9.-]+/g,"")) - 5000) && Number(user.salary.replace(/[^0-9.-]+/g,"")) <= (Number(salary.replace(/[^0-9.-]+/g,""))+5000) );
    const secondFilter = firstFilter.filter ( user => user.province == province);
    const thirdFilter = secondFilter.filter ( user => user.highest_education == highest_education);

    const finalFilter = thirdFilter.filter ( user => user.id != currentUser.result.id);

    return calculateAverages(finalFilter);
}

function calculateAverages( userList) {
    
    const dispatch = useDispatch();

    var targetedAverage = {
        housing: {
            average: 0,
            subcategory :{
                utilities: 0,
                mortgage: 0,
                rent: 0,
            }
        },
        communications: {
            average: 0,
            subcategory :{
                internet: 0,
                cable: 0,
                cell: 0
            }
        }, 
        transport: {
            average: 0,
            subcategory :{
                car: 0,
                public: 0
            }
        },
        food: {
            average: 0,
            subcategory :{
                restaurants: 0,
                supermarket: 0
            }
        },
        aesthetics: {
            average: 0,
            subcategory :{
                clothes: 0,
                body: 0
            }
        },
        subscriptions: {
            average: 0,
            subcategory :{
                gym: 0,
                music: 0,
                others: 0
            }
        },
        health: {
            average: 0,
            subcategory :{
                prescriptions: 0,
                appointments: 0
            }
        },
        other: {
            average: 0
        }
    }
    
    let expenseList = {};

    for(let i = 0; i < userList.length; i++){
        let oId = userList[i].id;
        dispatch(getUserExpenseById(oId));
        break;
    }

    //this can be removed if we figure out how to get avg
    const avgExpenses = JSON.parse(localStorage.getItem("expenseAvg")).result;
    console.log(avgExpenses);

    targetedAverage.housing.average = (avgExpenses.housing.mortgage + avgExpenses.housing.rent + avgExpenses.housing.utilities);
    targetedAverage.communications.average = (avgExpenses.communications.internet + avgExpenses.communications.cable + avgExpenses.communications.cell);
    targetedAverage.transport.average = (avgExpenses.transport.car + avgExpenses.transport.public);
    targetedAverage.food.average = (avgExpenses.food.restaurants + avgExpenses.food.supermarket);
    targetedAverage.aesthetics.average = (avgExpenses.aesthetics.body + avgExpenses.aesthetics.clothes);
    targetedAverage.subscriptions.average = (avgExpenses.subscriptions.music + avgExpenses.subscriptions.gym + avgExpenses.subscriptions.music + avgExpenses.subscriptions.others);
    targetedAverage.health.average = (avgExpenses.health.prescriptions + avgExpenses.health.appointments);
    targetedAverage.other.average = avgExpenses.other;

    console.log(targetedAverage);



    return targetedAverage;
}