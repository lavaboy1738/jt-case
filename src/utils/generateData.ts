import moment from "moment";

//data and types 
import {Tag, Team} from "../Data/data";
import {Criteria} from "../App";

type DataEntry = {
    date: string,
    total: number,
    tags?: Tag[],
    teams?: Team[],
}

export const generateData = (criteria: Criteria)=>{
    const result:DataEntry[] = []
    const totalDaysInMonth = moment(criteria.start_date, "YYYY-MM-DD hh:mm:ss").daysInMonth();
    const selectedMonth = moment(criteria.start_date, "YYYY-MM-DD hh:mm:ss").format("MMM");
    for(let i = 1; i<= totalDaysInMonth; i++){
        let amount = 0;
        let selectedTags:Tag[] = [];
        let selectedTeams: Team[] = [];
        const date = moment(`2021-${selectedMonth}-${i}`).format("YYYY-MM-DD");
        for(let j=0; j< criteria.transactions.length; j++){
            if(moment(criteria.transactions[j].date).format("YYYY-MM-DD") === date){
                amount += criteria.transactions[j].amountInCents
                selectedTeams = [...criteria.teams];
                selectedTags = [...criteria.tags];
            }
        }
        result.push({date, total: (amount/100), tags: selectedTags, teams: selectedTeams})
    }
    return result
}