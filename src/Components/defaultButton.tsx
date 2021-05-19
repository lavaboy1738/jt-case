import React from "react";
import styled from "styled-components";

const DefaultButtonStyles = styled.button`
    margin: 0 10px;
    padding: 5px 10px;
    border: 1px solid var(--seagreen);
    cursor: pointer;
    border-radius: 7px;
    &.active{
        background-color: var(--seagreen);
        color: white;
        font-weight: 400;
    }
`
type Prop = {
    text: String
    active: Boolean
}

export const DefaultButton = (prop: Prop)=>{
    return(
        <DefaultButtonStyles className={prop.active? "active" : ""}>
            {prop.text}
        </DefaultButtonStyles>
    )
}