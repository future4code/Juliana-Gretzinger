import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import SelecionaResposta from './SelecionaResposta';


class Etapa1 extends React.Component {
    render () {
        return (
            <div>
                <h1>DADOS GERAIS</h1>
                    <p>Olá! Nessa primeira etapa, responda por favor às seguintes perguntas:</p>
                
                <PerguntaAberta pergunta={"1. Qual é o seu nome?"}/>
                <PerguntaAberta pergunta={"2. Quantos anos você tem?"}/>
                <PerguntaAberta pergunta={"3. Qual é o seu email?"}/>

                <SelecionaResposta pergunta={"4. Qual o seu grau de escolaridade?"}
                opcoes = {[
                "Ensino médio incompleto",
                "Ensino médio completo",
                "Ensino superior incompleto",
                "Ensino superior completo"
                ]}
            />
             
            </div>
    
                )    
                }
            }

export default Etapa1