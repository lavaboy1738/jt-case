import React, { useContext} from "react";
import styled from "styled-components";
import moment from "moment";

//components
import {MonthSelection} from "./monthSelection";
import {TagSelection} from "./tagsSelection";
import {TeamSelection} from "./teamSelection";

//context
import {GlobalContext, Criteria} from "../App";

//data
import {data} from "../Data/data";

const SelectorsStyles = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .label{
        display: inline-block;
        width: 70px;
    }
    .content{
        margin-left: -10px;
    }
    .refresh{
        font-size: 15px;
        width: 100px;
        margin-left: 0px;
    }
`

export const Selectors = ()=>{
    const {criteria, setCriteria} = useContext(GlobalContext);

    //this function filters the transactions according to the criteria selected, then update the context
    const filterTransactions = (criteria: Criteria)=>{
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
        setCriteria(()=>{return {...criteria, transactions: result}})
    }

    return(
        <SelectorsStyles>
            <MonthSelection/>
            <TagSelection/>
            <TeamSelection/>
            <button className="default-button active refresh" onClick={()=>filterTransactions(criteria)}>Refresh</button>
        </SelectorsStyles>
    )
}
