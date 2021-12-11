import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import SelecionaResposta from './SelecionaResposta';


class Etapa2 extends React.Component {

    render () {
        return (
            <div>
            <h1>Etapa 2</h1>
              <p>Olá! De acordo com as respostas sobre seu grau de escolaridade, por favor responda às seguintes perguntas:</p>
                <PerguntaAberta pergunta={"1. Que curso superior de graduação você concluiu/está concluindo?"}/>
                <PerguntaAberta pergunta={"2.Em qual universidade você concluiu/está concluindo este curso?"}/>
       
          </div>

        )   
    }
}

export default Etapa2
