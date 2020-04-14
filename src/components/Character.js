import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent,CardMedia, Typography,CardActionArea } from '@material-ui/core';

const Character = ({character}) => {
    const {name,status,species,gender,image } = character
    return (
        <Card variant='elevation' className='single-character'>
            <CardActionArea>
            <CardMedia image={image} title='id' className='single-character-card-media' />
            <CardContent>
                <Typography variant='h3' component='h1'>{name}</Typography>
                <Typography variant='body2'>Status: {status}</Typography>
                <Typography variant='body2'>Species: {species}</Typography>  
                <Typography variant='body2'>Gender: {gender}</Typography>  

            </CardContent>
            </CardActionArea>
        </Card>
    );
};

Character.propTypes = {
    character: PropTypes.object,
};

export default Character;