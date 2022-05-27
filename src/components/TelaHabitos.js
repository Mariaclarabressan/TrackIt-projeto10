import { useContext, useState } from 'react';
import styled from "styled-components";
import Topo from "./Topo";
import Base from "./Base";
import NovoHabito from "./NovoHabito";
import HabitosUsuario from "./HabitosUsuario";

import TokenContext from '../contexts/TokenContext';



function TelaHabitos() {
    const { token } = useContext(TokenContext);

    const [ novoHabito, setNovoHabito] = useState(<></>)

    return (
        <>
            <Topo />
            <Container>
                <MeusHabitos>
                    <Titulo>Meus hábitos</Titulo>
                    <Button onClick = {() => setNovoHabito(<NovoHabito setNovoHabito = {setNovoHabito} token= {token}/>)}>
                        +                      
                    </Button>
                </MeusHabitos>
                {novoHabito}
                <HabitosUsuario token = {token}/>
            </Container>

            <Base />
        </>
    );
}

export default TelaHabitos;

const Container = styled.div`
background-color: #e5e5e5;
margin-bottom: 100px;
height: 100vh;

`
const Titulo = styled.p`
font-size: 23px;
color: #126ba5;
`
const MeusHabitos = styled.p`
padding: 100px 17px 0 17px;
display: flex; 
justify-content: space-between;
align-items: center; 
`

const Button = styled.div`
border: none;
background: #52b6ff;
border-radius: 5px;
width: 40px;
height: 35px;
color: #FFFFFF;
font-size: 27px;
display: flex; 
align-items: center; 
justify-content: center;
font-weight: 800;
font-family: 'Lexend Deca';
`