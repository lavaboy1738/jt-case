import React, { useState } from "react";
import styled from "styled-components";

import {Team} from "../data/data";

const TeamSelectionStyles = styled.div`
    display: flex;
    align-items: center;

`

const teams:Team[] = ["Bruins", "Raptors", "Celtics"]

export const TeamSelection = ()=>{
    const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
    const toggleTag = (team: Team)=>{
        const copy = [...selectedTeams];
        const index = copy.indexOf(team);
        if(index !== -1){
            copy.splice(index, 1);
            setSelectedTeams(copy)
        }else{
            copy.push(team)
            setSelectedTeams(copy)
        }
    }

    return(
        <TeamSelectionStyles>
                <span className="label">Tags:</span>
                <div className="content">
                    {
                        teams.map((team)=>{
                            return(
                                <button className={`default-button ${selectedTeams.includes(team)? "active" : ""}`} 
                                key={team} onClick={()=>toggleTag(team)} >{team}</button>
                            )
                        })
                    }
                </div>
        </TeamSelectionStyles>
    )
}