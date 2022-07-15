import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


function Header() {
    return(
        <HeadBox>
            <Link to={"/"} style={{ textDecoration : "none" }} >
                <Title>Module 물품대여 시스템</Title>
            </Link>
        </HeadBox>
    )
}

export default Header;

const HeadBox = styled.div`
    display: flex;

    align-items: center;
    
    
    background-color: #1A365E;
    
    width: 100%;
    height: 80px;
`;

const Title = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: GodoB;
    margin-left: 30px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 500;
`;

