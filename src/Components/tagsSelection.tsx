import React, { useState, useContext } from "react";
import styled from "styled-components";

//data
import {Tag, tags} from "../Data/data";

//context
import {GlobalContext} from "../App";

const TagSelectionStyles = styled.div`
    display: flex;
    align-items: center;

`

export const TagSelection = ()=>{
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const {criteria, setCriteria} = useContext(GlobalContext);

    const toggleTag = (tag: Tag)=>{
        const copy = [...selectedTags];
        const index = copy.indexOf(tag);
        if(index !== -1){
            copy.splice(index, 1);
            setSelectedTags(copy);
            setCriteria(()=>{return {...criteria, tags: copy}})
        }else{
            copy.push(tag)
            setSelectedTags(copy)
            setCriteria(()=>{return {...criteria, tags: copy}})
        }
    }

    return(
        <TagSelectionStyles>
                <span className="label">Tags:</span>
                <div className="content">
                    {
                        tags.map((tag)=>{
                            return(
                                <button className={`default-button ${selectedTags.includes(tag)? "active" : ""}`} 
                                key={tag} onClick={()=>toggleTag(tag)} >{tag}</button>
                            )
                        })
                    }
                </div>
        </TagSelectionStyles>
    )
}