import React, {useState} from "react";

export type Month = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"

export const months:Month[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const useDate = ()=>{
    const [selectedMonth, setSelectedMonth] = useState<Month>("Jan")
    const selectMonth = (month: Month) => {
        setSelectedMonth(month)
    }
    return {selectedMonth, selectMonth}
}