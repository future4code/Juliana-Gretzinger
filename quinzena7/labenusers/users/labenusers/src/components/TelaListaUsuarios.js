import React from 'react'


class TelaListaUsuario extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.irParaCadastro}> Ir para Cadastro </button>
                <h2>LISTA DE USUÁRIOS</h2>
            </div>
        )
    }
}

export default TelaListaUsuario