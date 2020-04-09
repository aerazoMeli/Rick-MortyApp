import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CharactersList from '../components/CharactersList';


const instance = axios.create({
    baseURL:'https://rickandmortyapi.com/api/',
});

const CharacterListContainer = ({ handles }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        instance.get('character')
        .then(resp => {
            const { results } = resp.data;
            setCharacters(results);
        })
    });

    return (
        <div>
            {   
                characters.length > 0 ? <CharactersList handles={handles} characters={characters}></CharactersList> : 'Obteniendo...'
            }
        </div>
    );
};

CharacterListContainer.propTypes = {
  
};

export default CharacterListContainer;