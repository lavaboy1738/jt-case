import React from "react";
import styled from "styled-components";

//components
import {MonthSelection} from "./monthSelection";
import {TagSelection} from "./tagsSelection";
import {TeamSelection} from "./teamSelection";

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
`

export const Selectors = ()=>{

    return(
        <SelectorsStyles>
            <MonthSelection/>
            <TagSelection/>
            <TeamSelection/>
        </SelectorsStyles>
    )
}
