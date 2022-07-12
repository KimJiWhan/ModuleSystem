import React, { useState } from 'react';
import styled from 'styled-components';

function StartPage(){
    const [design, setDesign] = useState([]);
    const [plan, setPlan] = useState([]);
    const [front, setFront] = useState([]);
    const [back, setBack] = useState([]);

    const [name, setName] = useState("");
    const onNameChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const Box = [
        design.map((value, index) => (
            <NameBox 
                key={index}
                onClick = {() => {

                }}
            >{value}</NameBox>
        )),
        plan.map((value, index) => (
            <NameBox 
                key={index}
                onClick = {() => {

                }}
            >{value}</NameBox>
        )),
        front.map((value, index) => (
            <NameBox 
                key={index}
                onClick = {() => {

                }}
            >{value}</NameBox>
        )),
        back.map((value, index) => (
            <NameBox
                key={index}
                onClick = {() => {

                }}
            >{value}</NameBox>
        )),
    ]

    return (
        <Container>
            <InputName
                placeholder='이름 입력 후 팀 배정'
                value = {name}
                onChange = {onNameChange}
            />
            <RowContainer>
                <ColumnContainer>
                    <NameBox 
                    onClick = {() => {
                        let tempArray = design;
                        tempArray.push(name);
                        setDesign(tempArray);
                        setName("");
                    }}
                    style = {{
                        backgroundColor: "#1A365E",
                        color: "#ffffff"
                    }}
                    >디자인</NameBox>
                    {Box[0]}
                </ColumnContainer>
                <ColumnContainer>
                    <NameBox 
                    onClick={() => {
                        let tempArray = plan;
                        tempArray.push(name);
                        setPlan(tempArray);
                        setName("");
                    }}
                    style = {{
                        backgroundColor: "#003875",
                        color: "#ffffff"
                    }}
                    >기획</NameBox>
                    {Box[1]}
                </ColumnContainer>
                <ColumnContainer>
                    <NameBox 
                    onClick={() => {
                        let tempArray = front;
                        tempArray.push(name);
                        setFront(tempArray);
                        setName("");
                    }}
                    style = {{
                        backgroundColor: "#FF8B53"
                    }}
                    >FrontEnd</NameBox>
                    {Box[2]}
                </ColumnContainer>
                <ColumnContainer>
                    <NameBox 
                    onClick={() => {
                        let tempArray = back;
                        tempArray.push(name);
                        setBack(tempArray);
                        setName("");
                    }}
                    style = {{
                        backgroundColor: "#ABC8E8"
                    }}
                    >BackEnd</NameBox>
                    {Box[3]}
                </ColumnContainer>
            </RowContainer>
        </Container>
    )
    
}

export default StartPage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
`;

const RowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;

`;

const ColumnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: normal;
    flex-direction: column;
`

const InputName = styled.input`
    width: 30rem;
    height: 6rem;
    font-size: 3rem;
`;

const NameBox = styled.div`
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