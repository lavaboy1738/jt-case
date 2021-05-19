import React from "react";
import styled, {keyframes} from "styled-components";
import Logo from "../assets/606a3c28dfa0b63c33e5cf89_Journal-White-Raw.jpeg";


const logoAnimation = keyframes`
    0%{
        transform: scale(0);
        opacity: 0;
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`

const titleAnimation= keyframes`
    0%{
        left: -0%;
    }
    100%{
        left: 120%;
    }
`

const pageAnimation = keyframes`
    0%{
        opacity:1;
        top: 0%;
    left: 0%;
    }
    99%{
        opacity: 0;
        top: 0%;
    left: 0%;
    }
    100%{
        opacity: 0;
        top: -100%;
    left: -100%;
    }
`

const IntroStyles = styled.div`
    position: absolute;
    top: -100%;
    left: -100%;
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 0.3s ${pageAnimation} ease 2s backwards;
    .content{
        text-align: center;
        .title{
            font-size: 1.2rem;
            font-weight: 200;
            text-align: center;
            padding-top: 0.6rem;
            position: relative;
            overflow: hidden;
            ::before{
                content: "";
                position: absolute;
                top: 0%;
                left: 120%;
                width: 100%;
                height: 100%;
                background-color: white;
                animation: 0.6s ${titleAnimation} ease 0.7s backwards;
            }
        }
        img{
            animation: 0.7s ${logoAnimation} cubic-bezier(1,.06,.57,1.44)
        }
    }
`



const Intro = () => {


    return (
        <IntroStyles>
            <div className="content">
                <img src={Logo} alt="" />
                <div className="title">Journal Technologies</div>
            </div>
        </IntroStyles>
    )
}

export {Intro}