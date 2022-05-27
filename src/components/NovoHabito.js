import { useState, useContext } from 'react';

import styled from 'styled-components';

import axios from 'axios';

import TokenContext from '../contexts/TokenContext';

function NovoHabito(props) {
    const { atualiza, setAtualiza, input, setInput } = useContext(TokenContext);

    const { setNovoHabito, token } = props;

    const [criaHabito, setCriaHabito] = useState(setInput != null ? input : criaHabito);
    const [dias, setDias] = useState([]);
    const [clicou, setClicou] = useState({ domingo: false, segunda: false, terca: false, quarta: false, quinta: false, sexta: false, sabado: false })
    const [carregando, setCarregando] = useState(false);

    const envioNovoHabito = {
        name: criaHabito,
        days: dias
    };

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    function seleciona(valor, dia) {
        if (dias.includes(valor)) {
            for (let i = 0; i < dias.length; i++) {
                if (dias[i] === valor) {
                    dias.splice(i, 1);
                    setClicou({ ...clicou, [dia]: false });
                }
            }
        } else {
            setDias([...dias, valor]);
            setClicou({ ...clicou, [dia]: true });
        }
    }

    function adicionaHabito(event) {

        event.preventDefault();
        if (dias.length > 0) {
            setCarregando(true);
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", envioNovoHabito, config);

            promise.then(() => {
                setAtualiza(atualiza + 1);
                setNovoHabito(<></>);
                setInput("");
            });
            promise.catch(() => {
                alert("Não foi possível criar o hábito")
                setCarregando(false);
            });

        } else {
            alert("Selecione pelo menos um dia");
        }
    }

    function confereHabito(event) {
        event.preventDefault();
        setCriaHabito(criaHabito);
        setNovoHabito(<></>);
    }


    return (
        <CriaCard>
            <form onSubmit={adicionaHabito} onReset={confereHabito}>
                <CriaNovoHabito>
                    <input
                        type="text"
                        placeholder="nome do hábito"
                        onChange={(event) => setCriaHabito(event.target.value)}
                        value={criaHabito}
                    />
                </CriaNovoHabito>


                <NewHabitos>
                    <NewHabito selecionado={clicou.domingo} onClick={() => seleciona(0, "domingo")}>D</NewHabito>
                    <NewHabito selecionado={clicou.segunda} onClick={() => seleciona(1, "segunda")}>S</NewHabito>
                    <NewHabito selecionado={clicou.terca} onClick={() => seleciona(2, "terca")}>T</NewHabito>
                    <NewHabito selecionado={clicou.quarta} onClick={() => seleciona(3, "quarta")}>Q</NewHabito>
                    <NewHabito selecionado={clicou.quinta} onClick={() => seleciona(4, "quinta")}>Q</NewHabito>
                    <NewHabito selecionado={clicou.sexta} onClick={() => seleciona(5, "sexta")}>S</NewHabito>
                    <NewHabito selecionado={clicou.sabado} onClick={() => seleciona(6, "sabado")}>S</NewHabito>
                </NewHabitos>


                <Botoes>
                    <Cancelar type="reset"> Cancelar</Cancelar>
                    <Enviar type="submit">Enviar</Enviar>
                </Botoes>
            </form>
        </CriaCard>
    )

}
export default NovoHabito;

const CriaCard = styled.div`
background-color: #FFFFFF;
width: 340px;
margin: 20px auto 0 auto; 
border-radius: 5px;
padding: 18px;
`
const CriaNovoHabito = styled.div`
input{
    
    margin-bottom: 6px; 
    width: 100%;
    height: 45px; 
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px; 
    padding-left: 11px; 
}

`

const NewHabitos = styled.div`
display: flex; 
align-items: center;
margin-bottom: 20px;
`
const NewHabito = styled.p`
border: 1px solid #d5d5d5;
box-sizing: border-box;
border-radius: 5px; 
font-size: 20px; 
padding: 6px 10px;
margin-right: 4px; 
`
const Botoes = styled.div`
display: flex;
padding-left: 150px;
`

const Cancelar = styled.button`
border: none; 
background-color: #FFFFFF;
font-size: 16px; 
color: #52b6ff;
font-weight: 400;
`
const Enviar = styled.button`
width: 84px; 
height: 35px; 
margin-left: 20px; 
background: #52b6ff;
border-radius: 5px; 
border: none; 
font-size: 16px; 
color: #FFFFFF;
display: flex; 
align-items: center;
justify-content: center; 
`
