import React from 'react'
import styled from 'styled-components'
import Pin  from '../components/Pin'

function Board(props) {
     
let {pins} = props

    return (
    <Wrapper>
        <Container>
            {pins.map((pin, index) => {
                let {urls} = pin;
               return  <Pin key={index} urls={urls}/> 
            })}
          
        </Container>
    </Wrapper>
    )
} 

export default Board


const Wrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 15px;
` 

const Container = styled.div`
    max-width: 1260px;
    column-count: 5;
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
    background-color: white;
    
` 