import React, { useState } from "react";
import styled from "styled-components";

//components
import {MonthSelection} from "./monthSelection";

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
    .tags{
        display: flex;
        align-items: center;
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
            <div className="tags">
                <span className="label">Tags:</span>
                <div className="content">
                    <button className="default-button" >coffee</button>
                    <button className="default-button" >movies</button>
                    <button className="default-button" >utils</button>
                </div>
            </div>
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
