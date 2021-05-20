import React, { useContext} from "react";
import styled from "styled-components";

//components
import {MonthSelection} from "./monthSelection";
import {TagSelection} from "./tagsSelection";
import {TeamSelection} from "./teamSelection";

//context
import {GlobalContext} from "../App";

//data
import {data} from "../Data/data";

//utils
import {filterTransactions} from "../utils/filterTransactions";

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

    //filter through data, get the transactions that fits the criteria, then udpate the criteria.
    const onUpdate = () =>{
        const result = filterTransactions(data, criteria);
        setCriteria(()=>{return {...criteria, transactions: result}})
    }

    return(
        <SelectorsStyles>
            <MonthSelection/>
            <TagSelection/>
            <TeamSelection/>
            <button className="default-button active refresh" onClick={()=>onUpdate()}>Refresh</button>
        </SelectorsStyles>
    )
}
