import styled from "styled-components";
import axios from 'axios';
import { useContext } from 'react';
import ResetContext from '../contexts/ResetContext';

import Lixeira from '../components/img/Lixeira.png';

function Habito(props) {
    const { reset, setReset } = useContext(ResetContext);

    const { id, name, days, token } = props;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    function deletarHabito() {
        if (window.confirm("Deseja excluir esse hábito?")) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
            promise.then(() => setReset(reset + 1));
            promise.catch(() => alert("Não foi possível deleter esse hábito"));
        }
    }

    return (
        <Cartao>
            <Nome>{name}</Nome>
            <Dias>
                <Dia selecionado={days.includes(0)}>D</Dia>
                <Dia selecionado={days.includes(1)}>S</Dia>
                <Dia selecionado={days.includes(2)}>T</Dia>
                <Dia selecionado={days.includes(3)}>Q</Dia>
                <Dia selecionado={days.includes(4)}>Q</Dia>
                <Dia selecionado={days.includes(5)}>S</Dia>
                <Dia selecionado={days.includes(6)}>S</Dia>
            </Dias>
            <Icone onClic={deletarHabito} src={Lixeira} alt="lixeira"></Icone>
        </Cartao>
    );
}

export default Habito;

const Cartao = styled.div`
position: relative;
width: 340px;
background-color: #FFFFFF;
margin: 20px auto 0 auto; 
border-radius: 5px;
padding: 18px;
`
const Nome = styled.p`
font-size: 20px;
color: #666666;
`
const Dias = styled.div`
display: flex;
margin-top: 7px;
`
const Icone = styled.div`
position: absolute;
top: 17px;
right: 17px;
width: 13px;

`
const Dia = styled.div`
border: 1px solid #d5d5d5;
box-sizing: border-box;
border-radius: 5px;
font-size: 20px;
padding: 6px 10px;
margin-right: 4px; 
`