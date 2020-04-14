import React from 'react';
import PropTypes from 'prop-types';
import Character from '../components/Character';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

const CharacterContainer = ({ character}) => {

    console.log('TAG: ',character);

    return (
        <div>
            {
                character ? <Character character={character}></Character> : <Typography className='text-empty-selection' variant='h5' component='h2'>Seleccione</Typography>
            }
        </div>
    );
};

CharacterContainer.propTypes = {
    character:PropTypes.object,
};

export default CharacterContainer;