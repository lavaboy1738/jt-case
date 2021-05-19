import React from "react";
import styled from "styled-components";

//components
import {Selectors} from "./selectors";
import {Total} from "./total"

const TopStyles = styled.div`
    height: 34%;
    display: flex;
    justify-content: space-between;
`

export const Top = ()=>{
    return (
        <TopStyles>
            <Selectors/>
            <Total/>
        </TopStyles>
    )
}