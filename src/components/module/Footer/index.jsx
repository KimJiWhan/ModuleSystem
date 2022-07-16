import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


function Footer() {
    return(
        <FootBox>
            <Link to={"/"} style={{ textDecoration : "none" }} >
                <Title>Footer</Title>
            </Link>
        </FootBox>
    )
}

export default Footer;

const FootBox = styled.div`
    display: flex;

    align-items: center;
    margin-top: auto;
    
    background-color: #1A365E;
    
    width: 100%;
    height: 160px;
    
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

