import React from 'react';
import PropTypes from 'prop-types';
import Character from '../components/Character';

const CharacterContainer = ({ character}) => {
    return (
        <div>
            <Character character={character}></Character>
        </div>
    );
};

CharacterContainer.propTypes = {
    
};

export default CharacterContainer;