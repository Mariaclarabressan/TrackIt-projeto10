import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Habito from "./Habito";
import TokenContext from '../contexts/TokenContext';

function HabitosUsuario(props) {
    const { token } = useContext(TokenContext);
    const [habitos, setHabitos] = useState([]);    

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


    }, [token]);

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
        <h1>
        Você não tem nenhum hábito cadastrado, adicione um para trackear!!
        </h1>
    </ZeroHabitos>)


}

export default HabitosUsuario;

const ZeroHabitos = styled.h1`
color: #666666;
font-size: 18px;
margin: 30px 17px 0 17px;
`