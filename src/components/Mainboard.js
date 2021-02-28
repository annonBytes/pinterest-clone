import React from 'react'
import styled from 'styled-components';
import Pin from './Pin';

function Mainboard(props) {

    let { pins } = props;
    
    return (
        <Wrapper>
            <Container>
                {pins.map((pin) => {
                    let {urls} = pin;
                  return  <Pin urls={urls}/>
                })}
                
            </Container>
        </Wrapper>
    )
}

export default Mainboard



const Wrapper = styled.div`
    background-color: yellow;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 5px;


` 

const Container = styled.div`
    background-color: green;
    width: 80%;
    display: flex;
    
` 