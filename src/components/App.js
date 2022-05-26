import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TelaLoging from "./TelaLoging";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import Hoje from "./Hoje";
import Historico from "./Historico";
import ImagemContext from '../contexts/ImagemContext';
import TokenContext from '../contexts/TokenContext';
import FinalizadoContext from '../contexts/FinalizadoContext';
import ResetContext from '../contexts/ResetContext';


function App() {
    const [token, setToken] = useState("");
    const [imagem, setImagem] = useState("");
    const [finalizado, setFinalizado] = useState("");
    const [reset, setReset] = useState("");
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
        const resetLocal = localStorage.getItem("reset")
        if (resetLocal) {
            setReset(resetLocal);
        }
    }, []);



    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <ImagemContext.Provider value={{ imagem, setImagem }}>
                <ResetContext.Provider value={{ reset, setReset }}>
                    <FinalizadoContext.Provider value={{ finalizado, setFinalizado }}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<TelaLoging />} />
                                <Route path="/TelaCadastro" element={<TelaCadastro />} />
                                <Route path="/TelaHabitos" element={<TelaHabitos />} />
                                <Route path="/TelaHoje" element={<Hoje />} />
                                <Route path="/TelaHistorico" element={<Historico />} />
                            </Routes>
                        </BrowserRouter>

                    </FinalizadoContext.Provider>
                </ResetContext.Provider>
            </ImagemContext.Provider>
        </TokenContext.Provider>
    )
}
export default App;