import React, { useContext } from "react";
import styled from "styled-components";
import {LineChart, Line, Tooltip, XAxis, YAxis} from "recharts";

//context
import {GlobalContext} from "../App";

//hooks
import {generateData} from "../utils/generateData";

const BottomStyles = styled.div`
    height: 60%;
    display: flex;
    justify-content:center;
    align-items: center;
    .warning{
        text-align:center;
    }
`

export const Bottom = ()=>{
    const {criteria} = useContext(GlobalContext);
    //generate data for the graphs

    return (
        <BottomStyles>
            {
                criteria.transactions.length===0?
                <div className="warning">Data only available in March, April and May
                <br />
                 Please select month and click refresh, then add criteria
                 </div>
                :
                <LineChart width={930} height={320} data={generateData(criteria)}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <XAxis dataKey="date"/>
                    <YAxis dataKey="total"/>
                    <Tooltip/>
                </LineChart>
            }
        </BottomStyles>
    )
}