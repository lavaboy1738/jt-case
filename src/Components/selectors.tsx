import React from "react";
import styled from "styled-components";

//components
import {DefaultButton} from "./defaultButton";

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
    .month{
        display: flex;
        align-items: center;
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
            <div className="month">
                <span className="label">Month:</span>
                <div className="content">
                    <DefaultButton text="Jan" active={false}/>
                </div>
            </div>
            <div className="tags">
                <span className="label">Tags:</span>
                <div className="content">
                    <DefaultButton text="coffee" active={false}/>
                    <DefaultButton text="movies" active={true}/>
                    <DefaultButton text="utils" active={false}/>
                </div>
            </div>
            <div className="teams">
                <span className="label">Teams:</span>
                <div className="content">
                    <DefaultButton text="Bruins" active={false}/>
                    <DefaultButton text="Raptors" active={false}/>
                    <DefaultButton text="Celtics" active={false}/>
                </div>
            </div>
        </SelectorsStyles>
    )
}
