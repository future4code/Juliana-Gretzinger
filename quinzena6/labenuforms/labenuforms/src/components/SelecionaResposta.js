import React from "react";

function SelecionaResposta (props) {
    return (
        <div>
            <p>{props.pergunta} </p>
            <select>
                {props.opcoes.map(opcao => (
                <option value={opcao}>{opcao}</option>
                ))}
            </select>
        </div>
    )

    
}

export default SelecionaResposta