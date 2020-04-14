import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CharactersList from '../components/CharactersList';
import withHome from '../home/home';


const instance = axios.create({
    baseURL:'https://rickandmortyapi.com/api/',
});

const CharacterListContainer = ({ handlers, searchText }) => {

    const [characters, setCharacters] = useState([]);

     const getCharacters = async (searchText) => {
        let uri = 'character';
        if(searchText !== ''){
            uri += `?name=${searchText}`;
        }
        const resp = await instance.get(uri);
        const { results } = resp.data;
        setCharacters(results);
    }

    useEffect(() => {
        getCharacters(searchText);
    }, [searchText]);

    return (
        <div>
            {   
                characters.length > 0 ? <CharactersList handlers={handlers} characters={characters}></CharactersList> : 'Obteniendo...'
            }
        </div>
    );
};

CharacterListContainer.propTypes = {
    handlers:PropTypes.object,
    nombre: PropTypes.string.isRequired,
};

export default withHome(CharacterListContainer);