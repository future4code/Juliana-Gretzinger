import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;



function App() {
  return (
    
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.6435-9/80079725_2632052333523207_4079812214976937984_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFeEvPfuvwFyuo5pjDRnh3AmVA5rbevG2SZUDmtt68bZBhuPPUxA4zga2RCJYpRTIBz1_soRGjVfQQTvrEmZGK5&_nc_ohc=qHmmRxQHRuYAX9sx8AS&_nc_oc=AQk7DdEa0H0IHObjuM-hrBgepFUW3LYJ91S42iWR62u5Os0PqqC4Y_ycuDU-s35kAOc&tn=loRdAQ6tNXsCtBAX&_nc_ht=scontent.fsdu5-1.fna&oh=2041bec88d1d8f8dda7fc6d79748931a&oe=6167105F" 
          nome="Juliana Gretzinger" 
          descricao="Olá! Meu nome é Juliana Gretzinger, sou artista visual, pesquisadora e estudante de desenvolvimento front-end na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="smallpage-container">
        <h2>Contato</h2>
        <CardPequeno
          imagem=""
          nome="Email:"
          descricao="gretz@gmail.com"
        />

        <CardPequeno
          imagem=""
          nome="Endereço:"
          descricao="Rua Labenu"
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://static.wixstatic.com/media/7c9ad5_602659d6839a4d80898f3bc056cd8b07~mv2_d_1999_1499_s_2.jpg/v1/fill/w_662,h_458,al_c,q_80,usm_0.66_1.00_0.01/Arte%20Digital.webp" 
          nome="Escola de Belas Artes - UFRJ" 
          descricao="Monitora na disciplina de Arte Digital do curso de Artes Visuais da UFRJ." 
        />
        
        <CardGrande 
          imagem="https://st2.depositphotos.com/1203257/5591/i/600/depositphotos_55918615-stock-photo-digital-slr-camera.jpg" 
          nome="Escola de Belas Artes - UFRJ" 
          descricao="Pesquisadora bolsista no grupo de pesquisa Fotografia Contemporânea." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
