import axios from "axios";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate, Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import Logo from './img/Logo.png';

function TelaCadastro() {

    const [cadastro, setCadastro] = useState({
        email: '',
        name: '',
        image: '',
        password: '',

    });
    const [carregando, setCarregando] = useState(false);

    //const navigate = useNavigate();

    function novoUsuario(event) {
        event.prevetDefault();
        //setCarregando(true);
        console.log(cadastro);

        //const body = cadastro;

        //const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);

        /*promise.then((response) => {

            //setCarregando(false);

            console.log(response.data)
        });*/
        /*promise.catch(() => {
            alert("Não foi possível realizar seu cadastro, por favor tente mais tarde.");
            setCarregando(false);
        });*/

    }


    return (
        <Container>
            <Imagem>
                <img src={Logo} alt="logo" />
            </Imagem>

            <form onSubmit={novoUsuario}>
                <div>
                    <input
                        placeholder="email"
                        type="email"
                        onChange={(event) => setCadastro({ ...cadastro, email: event.target.value })}
                        value={cadastro.email}
                    //disable={carregando}
                    />
                </div>
                <div>
                    <input
                        placeholder="nome"
                        type="name"
                        onChange={(event) => setCadastro({ ...cadastro, name: event.target.value })}
                        value={cadastro.name}
                    //disable={carregando}
                    />
                </div>
                <div>
                    <input
                        placeholder="senha"
                        type="password"
                        onChange={(event) => setCadastro({ ...cadastro, password: event.target.value })}
                        value={cadastro.password}
                    //disable={carregando}
                    />
                </div>
                <div>
                    <input
                        placeholder="imagem"
                        type="text"
                        onChange={(event) => setCadastro({ ...cadastro, image: event.target.value })}
                        value={cadastro.image}
                    //disable={carregando}
                    />
                </div>
                <div>
                    <Button type="submit" disable={carregando}>


                        <p>Cadastrar</p>

                    </Button>
                </div>
            </form>
            <Login>
                <Link to="/">Já tem uma conta? Faça o login</Link>
            </Login>
        </Container>
    )
}

export default TelaCadastro;

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
const Login = styled.p`
color: #52B6FF;
font-family: 'Lexend Deca';
font-size: 14px;
`