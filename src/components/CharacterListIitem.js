import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './styles.scss';

const CharacterListIitem = ({ character, handlers }) => {
    return (
        <Card variant='elevation' className='characters-list-character_card' onClick={() => handlers.handleClickCharacter(character)}>
            <CardContent className='characters-list-character_card-card-content'>
                <img src={character.image} alt='' height={70}></img>
                <h4>{character.name}</h4>
            </CardContent>
        </Card>
    );
};

CharacterListIitem.propTypes = {
    character:PropTypes.object,
};

export default CharacterListIitem;