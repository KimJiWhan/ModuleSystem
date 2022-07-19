import React from "react";
import styled from "styled-components";
import Title from "../../organisms/Title";

function IntroPage(){
    return(
        <Container>
            <Title Title="시스템반도체공학과 물품대여 / 공간대여" SubTitle="제1대 시스템반도체공학과 학생회 Module"/>
        </Container>
    );
}

export default IntroPage;

const Container = styled.div`
    display: flex;
`;
