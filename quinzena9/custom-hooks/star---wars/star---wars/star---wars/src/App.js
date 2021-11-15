import logo from './logo.svg';
import './App.css';
import   CharacterListPage  from './pages/CharacterListPage';
import  CharacterDetailPage  from './pages/CharacterDetailPage';
import { useState, useEffect } from 'react';
import { GoToDetail } from './pages/CharacterListPage/styles';

const App = () => {

  const [currentPage, setCurrentPage] = useState("list");

      function selectPage (currentPage) {

        switch(currentPage){
          case "list":
            return <CharacterListPage />
          case "detail":
             return <CharacterDetailPage />
          default:
            return <CharacterListPage />
        };
        };

        const changePage = () => {
          if (currentPage === "list") {
            setCurrentPage("detail")
          } else {
            setCurrentPage("list")
          }};

         return (
            <div>
              {selectPage}
              {currentPage === "list" ?  <CharacterListPage /> :  <CharacterDetailPage />}
             <GoToDetail>
                <button onClick={changePage}>{currentPage === "list" ? "Ir para Detalhes" : "Ir para Lista"}</button>
              </GoToDetail>
      
            </div>
          )
           
};

export default App;
