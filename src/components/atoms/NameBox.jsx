import React from "react";
import styled from "styled-components";

function NameBox({children}){
    return (
        <Box>
            {children}
        </Box>
    )
}

export default NameBox;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 5rem;
    width: 10rem;
    border: 0.2rem solid #000000;
    border-radius: 1rem;

    font-size: 2rem;

    margin: 1rem 1rem 1rem 1rem;

    cursor: pointer;
`;