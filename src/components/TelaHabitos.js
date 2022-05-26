import { useContext } from 'react';
import styled from "styled-components";
import Topo from "./Topo";
import Base from "./Base";
//import NovoHabito from "./NovoHabito";
import HabitosUsuario from "./HabitosUsuario";

import TokenContext from '../contexts/TokenContext';



function TelaHabitos() {
    const { token } = useContext(TokenContext);

    return (
        <>
            <Topo />
            <Container>
                <MeusHabitos>
                    <Titulo>Meus hábitos</Titulo>
                    <Button>
                        Adicionar Habitos                      
                    </Button>
                </MeusHabitos>
                <HabitosUsuario token = {token}/>
            </Container>

            <Base />
        </>
    );
}

export default TelaHabitos;

const Container = styled.div`
background-color: green;

`
const Titulo = styled.p`
color: grey;
`
const MeusHabitos = styled.p`
color: black;
`

const Button = styled.div`
background-color: pink;
`