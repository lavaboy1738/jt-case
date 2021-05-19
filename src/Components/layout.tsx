import React from "react";
import styled from "styled-components";

//components
import {Top} from "./top";
import {Bottom} from "./bottom";

const LayoutStyles = styled.div`
    border: 2px solid var(--seagreen);
    padding: 30px;
    width: 1000px;
    height: 600px;
    border-radius: 30px;
    box-shadow: 10px 10px 46px -6px rgba(0,0,0,0.39);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Layout = ()=>{
    return(
        <LayoutStyles>
            <Top/>
            <Bottom/>
        </LayoutStyles>
    )
}
