import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent,CardMedia, Typography,CardActionArea } from '@material-ui/core';

const Character = ({character}) => {
    return (
        <Card variant='elevation' className='single-character'>
            <CardActionArea>
            <CardMedia image={character.image} title='id' className='single-character-card-media' />
            <CardContent>
                <Typography variant='h3' component='h1'>{character.name}</Typography>
                <Typography variant='body2'>Status: {character.status}</Typography>
                <Typography variant='body2'>Species: {character.species}</Typography>  
                <Typography variant='body2'>Gender: {character.gender}</Typography>  
           
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

Character.propTypes = {
    
};

export default Character;