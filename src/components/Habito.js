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
        <Habito>
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
        </Habito>
    );
}

export default Habito;


const Nome = styled.p`
color: red;
`
const Dias = styled.div`
background-color: pink;
`
const Icone = styled.div`
width: 20px;

`
const Dia = styled.div`
border-radius : 5px; 
`