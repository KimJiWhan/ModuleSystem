import React from "react";
import styled from "styled-components";
import Header from "../../module/Header";

function BaseTepl({ children }){
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
}

export default BaseTepl;

const Container = styled.div`
    min-width: 1080px;
    height: auto;
    
`;

