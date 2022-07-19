import React from "react";
import styled from "styled-components";
import Header from "../../module/Header";
import Footer from "../../module/Footer";

function BaseTepl({ children, changePage }){
    return (
        <Container>
            <Header changePage={changePage} />
            <ChildPart>
                {children}
            </ChildPart>
            <Footer />
        </Container>
    );
}

export default BaseTepl;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    min-width: 1080px;
    min-height: 120vh;
`;

const ChildPart = styled.div`
    display: flex;
    margin: 50px 0px 0px 50px;
`;
