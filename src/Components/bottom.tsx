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
`

type DataEntry = {
    date: string,
    total: number,
    tags?: Tag[],
    teams?: Team[],
}

export const Bottom = ()=>{
    const {criteria} = useContext(GlobalContext);
    const generateData = (transactions: Transaction[])=>{
        const result:DataEntry[] = []
        const totalDaysInMonth = moment(criteria.month, "MMM").daysInMonth();
        for(let i = 1; i<= totalDaysInMonth; i++){
            let amount = 0;
            let selectedTags:Tag[] = [];
            let selectedTeams: Team[] = [];
            const date = moment(`2021-${criteria.month}-${i}`).format("YYYY-MM-DD");
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
             <LineChart width={930} height={320} data={generateData(criteria.transactions)}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <XAxis dataKey="date"/>
                <YAxis dataKey="total"/>
                <Tooltip/>
            </LineChart>
        </BottomStyles>
    )
}