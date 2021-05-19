import React, { useState } from "react";
import styled from "styled-components";

//components
import {MonthSelection} from "./monthSelection";
import {TagSelection} from "./tagsSelection";

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
    .teams{
        display: flex;
        align-items: center;
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
            <div className="teams">
                <span className="label">Teams:</span>
                <div className="content">
                    <button className="default-button" >Bruins</button>
                    <button className="default-button" >Raptors</button>
                    <button className="default-button" >Celtics</button>
                </div>
            </div>
        </SelectorsStyles>
    )
}
