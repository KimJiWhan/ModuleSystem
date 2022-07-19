import React from "react";
import styled from "styled-components";


function Footer() {
    return(
        <FootBox>
            <LinkA href="https://www.google.com">Notion HomePage </LinkA>
            <Title>제작: 김지환</Title>
        </FootBox>
    )
}

export default Footer;

const FootBox = styled.div`
    display: flex;
    margin-top: auto;
    flex-direction: column;
    padding: 30px 0px 30px 30px;

    
    background-color: #1A365E;
    
    width: 100%;
    height: 160px;
    font-family: GodoB;
`;

const Title = styled.p`
    display: flex;

    
    color: #ffffff;
    font-size: 25px;
    font-weight: 500;
`;

const LinkA = styled.a`
    display: flex;
    text-decoration: none;
    
    color: #ffffff;
    font-size: 25px;
`;