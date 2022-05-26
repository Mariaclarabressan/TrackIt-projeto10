import {useContext} from 'react';
import styled from 'styled-components';

import ImagemContext from '../contexts/ImagemContext';

function Topo(){
    const {fotoUsuario} = useContext(ImagemContext);

    return(
        <Header>
            <Logo>TrackIt</Logo>
            <FotoUsuario img src = {fotoUsuario} alt = "fotoUsuario" />
        </Header>
    )
}
export default Topo;

const Header = styled.div`
height: 70px;
background-color: #126BA5;
position: fixed;
display: flex; 
align-items: center;
justify-content: space-between;
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