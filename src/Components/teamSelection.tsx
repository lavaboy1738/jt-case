import React, { useState, useContext } from "react";
import styled from "styled-components";

//data
import {Team, teams} from "../Data/data";

//context
import {GlobalContext} from "../App";

const TeamSelectionStyles = styled.div`
    display: flex;
    align-items: center;

`

export const TeamSelection = ()=>{
    const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
    const {criteria, setCriteria} = useContext(GlobalContext);

    const toggleTeam = (team: Team)=>{
        const copy = [...selectedTeams];
        const index = copy.indexOf(team);
        if(index !== -1){
            copy.splice(index, 1);
            setSelectedTeams(()=>copy)
            setCriteria(()=>{return{...criteria, teams: copy}})
        }else{
            copy.push(team)
            setSelectedTeams(()=>copy)
            setCriteria(()=>{return{...criteria, teams: copy}})
        }
    }

    return(
        <TeamSelectionStyles>
                <span className="label">Teams:</span>
                <div className="content">
                    {
                        teams.map((team)=>{
                            return(
                                <button className={`default-button ${selectedTeams.includes(team)? "active" : ""}`} 
                                key={team} onClick={()=>toggleTeam(team)} >{team}</button>
                            )
                        })
                    }
                </div>
        </TeamSelectionStyles>
    )
}