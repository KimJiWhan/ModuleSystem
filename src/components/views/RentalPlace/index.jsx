import React from "react";
import styled from "styled-components";
import Title from "../../organisms/Title";

function RentalPlace(){
    return(
        <Container>
            <Title Title="공간대여 시스템" SubTitle="공간대여 시스템입니다."/>
        </Container>
    );
}

export default RentalPlace;

const Container = styled.div`
    display: flex;
    
`;
