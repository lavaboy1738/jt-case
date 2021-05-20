import React, {useState, useContext} from "react";
import styled from "styled-components";
import moment from "moment";

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
        const totalDaysInMonth = moment(month, "MMM").daysInMonth();
        const start_date = moment(`${month}-01`, "MMM-DD").format("YYYY-MM-DD hh:mm:ss");
        const end_date = moment(`${month}-${totalDaysInMonth}`, "MMM-DD").format("YYYY-MM-DD hh:mm:ss");
        setCriteria(()=>{return {...criteria, start_date, end_date}})
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