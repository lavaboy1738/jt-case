import React, { useState, useRef } from "react";
import styled from "styled-components";

import {Tag} from "../data/data";

const TagSelectionStyles = styled.div`
    display: flex;
    align-items: center;

`

const tags:Tag[] = ["movies", "coffee", "utils", "food", "groceries"]

export const TagSelection = ()=>{
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const toggleTag = (tag: Tag)=>{
        const copy = [...selectedTags];
        const index = copy.indexOf(tag);
        if(index !== -1){
            copy.splice(index, 1);
            setSelectedTags(copy)
        }else{
            copy.push(tag)
            setSelectedTags(copy)
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