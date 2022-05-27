import {useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TokenContext from '../contexts/TokenContext';

function HabitoHoje(props){
    const {id, name, done, currentSequence, highestSequence} = props;
    const {atualiza, setAtualiza, token} = useContext(TokenContext);
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const [selecionado, setSelecionado] = useState(done);
    const [record, setRecord] = useState(done);

    function seleciona(){
        if(done){
            const promise = axios.post(`
            https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check
            `, null, config)
            promise.then(() =>{
                setSelecionado(false);
                setRecord(false);
                setAtualiza(atualiza + 1);
            });
            promise.catch((erro) => console.log(erro.response));
        }else{
            const promise = axios.post(`
            https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check
            `, null, config)
            promise.then(() => {
                setSelecionado(true);
                setAtualiza(atualiza +1);
                if(currentSequence = highestSequence){
                    setRecord(true);
                }
            })
            promise.catch((erro) => console.log(erro.response));
        }
    }

    return(
        <Cartao onClick= {seleciona}>
            <Conteudo>
                <Titulo>{name}</Titulo>
                <Record>
                    <p>Sequência atual: <Escolhido selecionado = {selecionado}>{currentSequence}</Escolhido></p>
                    <p>Seu record atual: <RecordePessoal record = {record}>{highestSequence}</RecordePessoal></p>
                </Record>
            </Conteudo>
            <Vezinho>
                <p>Icone V</p>
            </Vezinho>
        </Cartao>
    )   

}
export default HabitoHoje;

const Cartao = styled.div`
background-color: yellow;
height: 20px;
`
const Conteudo = styled.div`
background-color: red; 
height: 20px;
`
const Titulo = styled.p`
color: black;
height: 20px;`

const Record = styled.div`
background-color: blue;
height: 20px;
`

const RecordePessoal = styled.div`
background-color: green;
height: 20px;
`
const Vezinho = styled.p`
color: blue;
font-size: 10px;
`