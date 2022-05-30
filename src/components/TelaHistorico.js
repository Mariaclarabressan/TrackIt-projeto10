import styled from "styled-components";

import Topo from "./Topo";
import Base from "./Base";


function TelaHistorico(){
    return(
        <>
        <Topo/>
        <HistoricoUsuario>
            <Titulo>Meus hábitos</Titulo>
            <Historico>Em breve você poderá ver o histórico dos seus hábitos aqui!</Historico>
        </HistoricoUsuario>
        <Base/>

        </>
    )
}
const HistoricoUsuario = styled.div`
padding: 100px 17px 0 17px;
display: flex;
flex-direction: column;
`
const Titulo = styled.div`
font-size: 23px;
color: #126Ba5;
margin-bottom: 17px;
`
const Historico = styled.p`
font-size: 18px;
color: #666666;`
export default TelaHistorico;