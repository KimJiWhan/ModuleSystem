import React from "react";
import styled from "styled-components";

function Title({Title, SubTitle}){
    return(
        <TitleDiv>
            <BigPr>{Title}</BigPr>
            <SmallPr>{SubTitle}</SmallPr>
        </TitleDiv>
    );
}

export default Title;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-family: GodoB;
`;

const BigPr = styled.p`
    display: flex;
    font-size: 50px;
    margin-bottom: 15px;
`;

const SmallPr = styled.p`
    display: flex;
    font-size: 30px;
`;