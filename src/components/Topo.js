import {useContext} from 'react';
import styled from 'styled-components';

import TokenContext from '../contexts/TokenContext';

function Topo(){
    const {imagem} = useContext(TokenContext);

    return(
        <Header>
            <Logo>TrackIt</Logo>
            <FotoUsuario img src = {imagem} alt = "fotoUsuario" />
        </Header>
    )
}
export default Topo;

const Header = styled.div`
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 70px;
background-color: #126BA5;
position: fixed;
display: flex; 
align-items: center;
justify-content: space-between;
box-shadow: 0px 4px 4px rgba(0,0,0,0.15);
z-index: 1;
`
const Logo = styled.div`
width: 97px;
height: 49px; 
margin-top: 10px;
margin-left: 18px;
font-family: 'Playball';
font-size: 39px;
color: #FFFFFF;
`
const FotoUsuario = styled.div`
width: 51px;
height: 51px;
border-radius: 50%;
margin-right: 10px; 
`