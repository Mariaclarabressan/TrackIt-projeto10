import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import FinalizadoContext from '../contexts/FinalizadoContext';

function Base(){
    const { finalizado } = useContext(FinalizadoContext)
    return(
        <Footer>
            <Link to = "/Habitos">
                <p>Hábitos</p>
            </Link>
            <Centro>
                <Link to= "Hoje">
                    <CircularProgressbar
                    value={finalizado}
                    text= {`Hoje`}
                    />
                </Link>
            </Centro>
            <Link to = "/Histórico">
                <p>Histórico</p>
            </Link>
        </Footer>
    )

}

export default Base;

const Footer = styled.div`
background-color: blue;
p{
    color: grey;
}
`
const Centro = styled.div`
background-color: red;

`