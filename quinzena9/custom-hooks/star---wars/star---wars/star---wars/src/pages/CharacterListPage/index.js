import react from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useState, useEffect } from "react";
import { PageContainer, CharacterContainer } from "./styles";
import { CharacterDetailPage } from "../CharacterDetailPage";

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


        {getCharacterList}

        </PageContainer>
    )
    }

    export default CharacterListPage

  




