import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


function Header({changePage}) {
    return(
        <HeadBox>
            <Title onClick = {() => {
                changePage(0);
            }}>Module 물품대여 시스템</Title>

            <div
                style = {{
                    display: "flex",
                    justifyContent: "space-between",

                }}>
                <Menu onClick = {() => {
                    changePage(1);
                }}>물품대여</Menu>
                <Menu onClick= {() => {
                    changePage(2);
                }}>공간대여</Menu>
            </div>


        </HeadBox>
    )
}

export default Header;

const HeadBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    
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
    margin-right: 30px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 500;
    
    cursor: pointer;
`;

const Menu = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: GodoB;
    margin-right: 30px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 500;
    
    cursor: pointer;
`;