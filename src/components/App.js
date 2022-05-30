import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TelaLoging from "./TelaLoging";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico";
import ImagemContext from '../contexts/ImagemContext';
import TokenContext from '../contexts/TokenContext';
import FinalizadoContext from '../contexts/FinalizadoContext';
import ResetContext from '../contexts/ResetContext';


function App() {
    const [token, setToken] = useState("");
    const [imagem, setImagem] = useState("");
    const [finalizado, setFinalizado] = useState("");   
    const [atualiza, setAtualiza] = useState("");
    const [concluido, setConcluido] = useState("");
    const [input, setInput] = useState("")
    useEffect(() => {
        const tokenLocal = localStorage.getItem("token");
        if (tokenLocal) {
            setToken(tokenLocal);

        }
        const imagemLocal = localStorage.getItem("imagem");
        if (imagemLocal) {
            setImagem(imagemLocal);
        }
        const finalizadoLocal = localStorage.getItem("finalizado")
        if (finalizadoLocal) {
            setFinalizado(finalizadoLocal);
        }   
        const atualizaLocal = localStorage.getItem("atualiza")
        if (atualizaLocal) {
            setFinalizado(atualizaLocal);
        }
        const concluidoLocal = localStorage.getItem("concluido")
        if (concluidoLocal) {
            setConcluido(concluidoLocal);
        }
        const inputLocal = localStorage.getItem("input")
        if (inputLocal) {
            setInput(inputLocal);
        }          
    }, []);



    return (
        <TokenContext.Provider value={{ token, setToken, imagem, setImagem, finalizado, setFinalizado, atualiza, setAtualiza, concluido, setConcluido, input, setInput}}>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLoging />} />
                    <Route path="/TelaCadastro" element={<TelaCadastro />} />
                    <Route path="/TelaHabitos" element={<TelaHabitos />} />
                    <Route path="/Hoje" element={<TelaHoje />} />
                    <Route path="/TelaHistorico" element={<TelaHistorico />} />
                </Routes>
            </BrowserRouter >
        </TokenContext.Provider>
    )
}
export default App;