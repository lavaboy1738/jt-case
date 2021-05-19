import React, { useContext, useEffect } from "react";
import styled from "styled-components";

//components
import {MonthSelection} from "./monthSelection";
import {TagSelection} from "./tagsSelection";
import {TeamSelection} from "./teamSelection";

//context
import {GlobalContext} from "../App";

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
    return(
        <SelectorsStyles>
            <MonthSelection/>
            <TagSelection/>
            <TeamSelection/>
            <button className="default-button active refresh" onClick={()=>console.log(criteria)}>Refresh</button>
        </SelectorsStyles>
    )
}
