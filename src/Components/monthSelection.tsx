import React, {useState} from "react";
import styled from "styled-components";

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
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState("Jan")
    const selectMonth = (month: string) => {
        setSelectedMonth(month)
        setIsOpen(false)
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (<MonthSelectionStyles>
                <span className="label">Month:</span>
                <div className="content">
                    <button className="active default-button" onClick={()=>setIsOpen(true)}>{selectedMonth}</button>
                    {
                        isOpen? <div className="months-window">
                            {
                                months.map((month)=>{
                                    return <button className={`default-button ${selectedMonth === month? "active": ""}`} key={month} onClick={()=>selectMonth(month)} >{month}</button>
                                })
                            }
                        </div>
                        :
                        null
                    }
                </div>
    </MonthSelectionStyles>)
}