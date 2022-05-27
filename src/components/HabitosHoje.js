import { useContext, useEffect, useState } from 'react';

import axios from 'axios';

import TokenContext from '../contexts/TokenContext';

import HabitoHoje from './HabitoHoje';

function HabitosHoje() {
    // coloquei o atualiza porque não só vou precisar chamar o token do usuario como atulizar sua lista
    const { token, atualiza, setConcluido } = useContext(TokenContext);
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const [ habitosHoje, setHabitosHoje] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today")
        promise.then((response) => {
            const {data} = response;
            setHabitosHoje(data);
            conclusaoHabito(data)
        })
        promise.catch(() => console.log("Carregando Habitos")); 
    }, [token, atualiza]);

    conclusaoHabito(habitos){ 
        const foiConcluido = habitos.filter((habito) => {
            return habito.done === true;
        })
        //aqui colocar a porcentagel dos habitos concluidos
    }
    
    return habitosHoje.length > 0 ? (
        <>
            {HabitoHoje.map((habito) => {
                const {id, name, done, currentSequence, highestSequence} = habito;

                return (
                    <HabitoHoje
                    key = {id}
                    id = {id}
                    name = {name}
                    done = {done}
                    currentSequence = {currentSequence}
                    highestSequence = {highestSequence}
                    />

                );
            })}
        </>

    ) : <></>
}