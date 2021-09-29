import React from 'react';
import ReactDOM from "react-dom";

import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';



class  App extends React.Component {
  state = {
    etapa: 1
  }

renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1: 
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Etapa4/>
      default: 
        return <Etapa4/>
    }
  
  }
  
proximaEtapa = () => {
    this.setState({etapa: this.state.etapa +1})
  }
  

render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
      
      <br/>

      {this.state.etapa !== 4 && (
        <button onClick={this.proximaEtapa}> Avançar </button>
      )}

      
    </div>
  );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App
