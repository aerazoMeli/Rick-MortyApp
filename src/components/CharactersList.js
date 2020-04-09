import React from 'react';
import PropTypes from 'prop-types';
import CharacterListIitem from './CharacterListIitem';

const CharactersList = ({ characters, handles }) => {
    return (
        <div className='characters-list'>
            {
                characters.map(character => <CharacterListIitem handles={handles} key={character.id} character={character}></CharacterListIitem>)
            }
        </div>
    );
};

CharactersList.propTypes = {
    characters: PropTypes.array,
};

export default CharactersList;