import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Habito from "./Habito";

import ResetContext from '../contexts/ResetContext';

function HabitosUsuario(props) {
    const [habitos, setHabitos] = useState([]);
    const { token } = props;
    const { reset } = useContext(ResetContext);

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promise.then((response) => {
            const { data } = response;
            if (data.length > 0) {
                setHabitos(data);
            }
        });
        promise.catch(() => alert("Tente mais tarde"));


    }, [token, reset]);

    return habitos.length > 0 ? (
        <>
            {habitos.map((habito) => {
                const { id, name, days } = habito;
                return (
                    <Habito
                        key={id}
                        name={name}
                        days={days}
                        id={id}
                        token={token}
                    />
                );
            })}
        </>

    ) : (<ZeroHabitos>
        Você não tem nenhum hábito cadastrado, adicione um para trackear!!
    </ZeroHabitos>)


}

export default HabitosUsuario;

const ZeroHabitos = styled.h1`
color: grey;
`