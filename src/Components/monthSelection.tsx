import React, {useState, useContext} from "react";
import styled from "styled-components";

//data and types
import {months, Month} from "../Data/data";

//context
import {GlobalContext} from "../App";

const MonthSelectionStyles = styled.div`
    display: flex;
    align-items: center;
    .content{
        position: relative;
        .months-window{
            position: absolute;
            left: 0;
            top: 0;
            background-color: white;
            width: 250px;
            height: 200px;
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-wrap: wrap;
            button{
                width: 60px;
            }
        }
    }

`

export const MonthSelection = ()=>{
    const [selectedMonth, setSelectedMonth] = useState<Month>("Jan")
    const [isOpen, setIsOpen] = useState(false);
    const {criteria, setCriteria} = useContext(GlobalContext);

    const toggleMonth = (month: Month)=>{
        setSelectedMonth(()=>month)
        setCriteria(()=>{return {...criteria, month}})
        setIsOpen(x=>!x)
    }

    return (<MonthSelectionStyles>
                <span className="label">Month:</span>
                <div className="content">
                    <button className="active default-button" onClick={()=>toggleMonth(selectedMonth)}>{selectedMonth}</button>
                    {
                        isOpen? <div className="months-window">
                            {
                                months.map((month)=>{
                                    return <button className={`default-button ${selectedMonth === month? "active": ""}`} key={month} onClick={()=>toggleMonth(month)} >{month}</button>
                                })
                            }
                        </div>
                        :
                        null
                    }
                </div>
    </MonthSelectionStyles>)
}