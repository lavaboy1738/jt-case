import React from "react";
import styled from "styled-components";

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
    .top{
        height: 30%;
        border: 1px solid red;
    }
    .bottom{
        height: 60%;
        border: 1px solid black;
    }
`

export const Layout = ()=>{
    return(
        <LayoutStyles>
            <div className="top"></div>
            <div className="bottom"></div>
        </LayoutStyles>
    )
}
