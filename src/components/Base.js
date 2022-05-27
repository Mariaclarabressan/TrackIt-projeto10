import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


import TokenContext from '../contexts/TokenContext';

const percentage = 69;

function Base() {
    const { finalizado } = useContext(TokenContext)
    return (
        <Footer>
            <HabitosBase>
                <Link to="/TelaHabitos">
                    <p>Hábitos</p>
                </Link>
            </HabitosBase>
            <Centro>
                <Link to="/TelaHoje">
                    <CircularProgressbar
                        value={percentage}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52b6ff",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                    />
                </Link>
            </Centro>
            <Historico>
                <Link to="/TelaHistórico">
                    <p>Histórico</p>
                </Link>
            </Historico>
        </Footer>
    )

}

export default Base;

const Footer = styled.div`
background-color: #FFFFFF;
position: fixed;
bottom: 0;
left:0;
right:0;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
color: #52b6ff;
p{
    font-size: 18px;
}
`
const Centro = styled.div`
margin-bottom: 50px;
width: 90px;
height: 90px;
background-color: #52b6ff;
border-radius: 100px;
border: 6px solid #52b6ff;
color: #FFFFFF;
display: flex; 
align-items: center; 
justify-content: center;
font-size: 18px;

`
const Historico = styled.p`
margin-right: 26px; 
font-size: 18px; 
a{
    text-decoration:none;
}
color: #52B6FF;

`

const HabitosBase = styled.p`
margin-left: 26px;
font-size: 18px;
color: #52B6FF;

a{
    text-decoration:none;
}
`