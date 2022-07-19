import React from "react";
import styled from "styled-components";
import Title from "../../organisms/Title";

function RentalItem(){
    return(
        <Container>
            <Title Title="물품대여 시스템" SubTitle="물품대여 시스템입니다."/>
        </Container>
    );
}

export default RentalItem;

const Container = styled.div`
    display: flex;
`;
