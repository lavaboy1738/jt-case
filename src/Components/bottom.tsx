import React, { useContext } from "react";
import styled from "styled-components";
import {LineChart, Line, Tooltip, XAxis, YAxis} from "recharts";
import moment from "moment";

//context
import {GlobalContext} from "../App";

//data types
import {Tag, Team, Transaction} from "../Data/data";

const BottomStyles = styled.div`
    height: 60%;
    display: flex;
    justify-content:center;
    align-items: center;
    .warning{
        text-align:center;
    }
`

type DataEntry = {
    date: string,
    total: number,
    tags?: Tag[],
    teams?: Team[],
}

export const Bottom = ()=>{
    const {criteria} = useContext(GlobalContext);
    //generate data for the graphs
    const generateData = (transactions: Transaction[])=>{
        const result:DataEntry[] = []
        const totalDaysInMonth = moment(criteria.start_date, "YYYY-MM-DD hh:mm:ss").daysInMonth();
        const selectedMonth = moment(criteria.start_date, "YYYY-MM-DD hh:mm:ss").format("MMM");
        for(let i = 1; i<= totalDaysInMonth; i++){
            let amount = 0;
            let selectedTags:Tag[] = [];
            let selectedTeams: Team[] = [];
            const date = moment(`2021-${selectedMonth}-${i}`).format("YYYY-MM-DD");
            for(let j=0; j< transactions.length; j++){
                if(moment(transactions[j].date).format("YYYY-MM-DD") === date){
                    amount += transactions[j].amountInCents
                    selectedTeams = [...criteria.teams];
                    selectedTags = [...criteria.tags];
                }
            }
            result.push({date, total: (amount/100), tags: selectedTags, teams: selectedTeams})
        }
        return result
    }
    return (
        <BottomStyles>
            {
                criteria.transactions.length===0?
                <div className="warning">Data only available in March, April and May
                <br />
                 Please select month and click refresh, then add criteria
                 </div>
                :
                <LineChart width={930} height={320} data={generateData(criteria.transactions)}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <XAxis dataKey="date"/>
                    <YAxis dataKey="total"/>
                    <Tooltip/>
                </LineChart>
            }
        </BottomStyles>
    )
}