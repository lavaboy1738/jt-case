import moment from "moment";

//data and types
import {Criteria} from "../App";
import {Transaction} from "../Data/data";


export const filterTransactions = (data: Transaction[], criteria: Criteria)=>{
    const checkArrs = (checked: String[] , criteriaArr: String[])=>{
        let result = false;
        for(let i = 0; i< criteriaArr.length; i++){
            result = checked.includes(criteriaArr[i])
        }
        return result;
    }
    const selectedMonth = moment(criteria.start_date, "YYYY-MM-DD hh:mm:ss").format("MMM");
    const result = data.filter((transaction)=>{
        //when only date is selected
        if(criteria.tags.length===0 && criteria.teams.length ===0){
            return moment(transaction.date,"YYYY-MM-DD jj:mm:ss").format("MMM") === selectedMonth
        }else if(criteria.tags.length ===0) {
            //when date and teams are selected
            return (moment(transaction.date,"YYYY-MM-DD jj:mm:ss").format("MMM") === selectedMonth
                && checkArrs(transaction.teams, criteria.teams))
        }else if(criteria.teams.length===0){
            //when date and tags are selected
            return (moment(transaction.date,"YYYY-MM-DD jj:mm:ss").format("MMM") === selectedMonth
            && checkArrs(transaction.tags, criteria.tags))
        }else{
            //when date, tags, and teams are selected
            return (moment(transaction.date,"YYYY-MM-DD jj:mm:ss").format("MMM") === selectedMonth
            && checkArrs(transaction.tags, criteria.tags)
            && checkArrs(transaction.teams, criteria.teams)
            )
        }
    })
    return result;
}
