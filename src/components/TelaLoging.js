import styled from 'styled-components';
import Logo from './img/Logo.png';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';


import ImagemContext from '../contexts/ImagemContext';
import TokenContext from '../contexts/TokenContext';

import axios from 'axios';


function TelaLoging() {
    const { setToken, setImagem } = useContext(TokenContext);
    const [login, setLogin] = useState({ email: '', password: '' });

    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();  



    function zeraToken() {
        setToken("");
    }

    function novoLogin(event) {
        event.preventDefault();
        setCarregando(true);
        zeraToken();
        
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {...login})

        promise.then((response) => {
            console.log(response.data);
            
            setImagem(response.data.image);
            setToken(response.data.token);
            setCarregando(false);

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("image", response.data.image);

            navigate("/TelaHabitos");


        });

        promise.catch(() => {
            alert("Login inválido, por favor confira os dados, ou cadastre-se")
            setCarregando(false);
        });
    }


    return (
        <Container>
            <Imagem>
                <img src={Logo} alt="Logo" />
            </Imagem>
            <form onSubmit={novoLogin}>
                <div>
                    <input
                        placeholder="email"
                        type="email"
                        onChange={(event) => setLogin({ ...login, email: event.target.value })}
                        value={login.email}
                        required
                        disabled={carregando}
                    />
                </div>
                <div>
                    <input
                        placeholder="senha"
                        type="password"
                        onChange={(event) => setLogin({ ...login, password: event.target.value })}
                        value={login.password}
                        required
                        disabled={carregando}
                    />
                </div>
                <div>
                    <Button type="submit" disable={carregando}>
                        {carregando ?
                            (<TailSpin />)
                            :
                            <p>Entrar</p>
                        }
                    </Button>
                </div>
                <div>
                    <Cadastro>
                        <Link to='/TelaCadastro'>Não tem uma conta? Cadastre-se!</Link>
                    </Cadastro>
                </div>

            </form>

        </Container>
    )
}


export default TelaLoging;
const Imagem = styled.div`
display: flex;
align-items: center;
justify-content: center; 
img{
    width: 180px;
    height: 178.38px;
    margin-top: 68px;    
}

`
const Container = styled.div`
background-color: #FFFFFF;

input{
    width: 303px;
    height: 45px;
    border-radius: 5px;
    margin-left: 36px;
    background-color: #FFFFFF;
    color: #dadada;
    border: solid 1px;
    margin: 10px 0;
    font-size: 20px;
}
form{
    
    display: flex;
    margin-top: 3%;
    align-items: center; 
    justify-content: center; 
    flex-direction: column;

}

`
const Button = styled.button`
background-color: #52b6ff;
width: 303px;
height: 45px;
border-radius: 5px;
margin-left: 36px;
color: #FFFFFF;
border: solid 1px;
margin: 10px 0;

`
const Cadastro = styled.p`
color: #52B6FF;
font-family: 'Lexend Deca';
font-size: 14px;


`