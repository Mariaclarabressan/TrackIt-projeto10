import { useState, useContext, useEffect } from 'react';

import styled from 'styled-components';

import axios from 'axios';

import TokenContext from '../contexts/TokenContext';


export default function NovoHabito(props) {


    const { token } = useContext(TokenContext);

    const [habito, setHabito] = useState("");

    const [dias, setDias] = useState([
        {
            name: "D",
            id: 0,
            isSelected: false

        },
        {
            name: "S",
            id: 1,
            isSelected: false

        },
        {
            name: "T",
            id: 2,
            isSelected: false

        },
        {
            name: "Q",
            id: 3,
            isSelected: false,

        },
        {
            name: "Q",
            id: 4,
            isSelected: false,

        },
        {
            name: "S",
            id: 5,
            isSelected: false,

        },
        {
            name: "S",
            id: 6,
            isSelected: false,

        }

    ])


    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        console.log(dias);
    }, [dias])


    function seleciona(diaID) {
        


        const diaSelecionado = dias.findIndex(day => day.id === diaID);
        const array = dias;
        array[diaSelecionado].isSelected = !array[diaSelecionado].isSelected
        debugger;
        setDias(array);


    }

    function adicionaHabito(event) {

        /*event.preventDefault();
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
        }*/
    }

    function confereHabito(event) {
        /*event.preventDefault();
        setCriaHabito(criaHabito);
        setNovoHabito(<></>);*/
    }


    return (
        <CriaCard>
            <form onSubmit={adicionaHabito} onReset={confereHabito}>
                <CriaNovoHabito>
                    <input
                        type="text"
                        placeholder="nome do hábito"
                        onChange={(event) => setHabito(event.target.value)}
                        value={habito}
                    />
                </CriaNovoHabito>


                <NewHabitos>

                    {
                        dias.map((dia) =>
                        (

                            <NewHabito key={dia.id} className={dia.isSelected ? grey : white} onClick={() => seleciona(dia.id)}>{dia.name}</NewHabito>
                        )
                        )
                    }
                </NewHabitos>


                <Botoes>
                    <Cancelar type="reset"> Cancelar</Cancelar>
                    <Enviar type="submit">Enviar</Enviar>
                </Botoes>
            </form>
        </CriaCard>
    )



}
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
const grey = styled.style`
background-color: #cfcfcf;
`

const white = styled.style`
background-color: #FFFFFF;
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
