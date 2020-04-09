import React from 'react';
import PropTypes from 'prop-types';

const CharacterListIitem = ({ character, handles }) => {
    return (
        <div>
            <h4>{character.name}</h4>
            <img src={character.image} height={70}></img>
            <button onClick={() => handles.handleClickCharacter(character)}>Ver personaje</button>
        </div>
    );
};

CharacterListIitem.propTypes = {
    character:PropTypes.object,
};

export default CharacterListIitem;