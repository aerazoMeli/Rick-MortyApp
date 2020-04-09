import React from 'react';
import PropTypes from 'prop-types';

const Character = ({character}) => {
    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image}></img>
        </div>
    );
};

Character.propTypes = {
    
};

export default Character;