import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import SelecionaResposta from './SelecionaResposta';

class Etapa3 extends React.Component {

    render () {
        return (
            <div>
                <h1>Etapa 3</h1>
                    <p>Olá! De acordo com as respostas sobre seu grau de escolaridade, por favor responda às seguintes perguntas:</p>
                    <PerguntaAberta pergunta={"1. Por qual motivo você não concluiu um curso superior de graduação?"}/>
                    <SelecionaResposta pergunta={"2. Você realizou algum curso complementar? Assinale a opção correspondente:"}
                                        opcoes={[
                                            "1. Sim, realizei um curso técnico",
                                            "2. Sim, realizei um curso de inglês e/ou outros idiomas",
                                            "3. Não realizei nenhum curso complementar"
                                        ]}
                                        />
      </div>

        )

        
    }
}

export default Etapa3