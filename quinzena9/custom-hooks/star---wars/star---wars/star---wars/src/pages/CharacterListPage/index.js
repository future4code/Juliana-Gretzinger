import react from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useState, useEffect } from "react";
import { PageContainer, CharacterContainer, PageTitle, GoToDetail } from "./styles";

const CharacterListPage = () => {

    const [characterList, setCharacterList] = useState("");

       const getCharacterList = () => {
        const URL =`${BASE_URL}/people`

        axios.get(URL)
            .then((res) => {
                setCharacterList(res.data.characterList)
            })
            .catch((err) => {
                console.log(err.response)
                
            })
        }
        

        useEffect(() => {
            getCharacterList()
        }, [])
            


    return (
     
           <PageContainer>    

                <PageTitle> Lista de personagens </PageTitle>
              <CharacterContainer />
              <CharacterContainer />
              <CharacterContainer />
              <CharacterContainer />
               
           </PageContainer>
         
        
       
    )
    }
    export default CharacterListPage

  




