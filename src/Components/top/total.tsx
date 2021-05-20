import React, { useContext } from "react";
import styled from "styled-components";

//context
import {GlobalContext} from "../../App";

const TotalStyles = styled.div`
    width: 25%;
    height: 100%;
    text-align: right;
    .title{
        font-size: 20px;
        font-weight: 400;
    }
    .number{
        font-size: 30px;
        font-weight: 400;
    }
`

export const Total = ()=>{
    const {criteria} = useContext(GlobalContext);
    return(
        <TotalStyles>
            <div className="title">Selected Total</div>
            <div className="number">{
                criteria.transactions.length===0?
                "Not Available"
                :
                `$${(criteria.transactions.reduce((accum, currentVal)=>accum + currentVal.amountInCents, 0)/100).toFixed(2)}`
            }</div>
        </TotalStyles>
    )
}

