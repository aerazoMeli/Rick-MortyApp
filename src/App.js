import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CharacterContainer from './containers/CharacterContainer';
import CharacterListContainer from './containers/CharacterListContainer';

function App() {
  const [characterSelected, selectCharacter] = useState(null);

  const handleClickCharacter  = character => {
    console.log(character);
    selectCharacter(character);
  };


  const handles = {
     handleClickCharacter,
  };

  return (
    <Grid>
    <Row>
        <AppBar position="sticky">
                <Toolbar>
                    Rick & Morty App
                </Toolbar>
        </AppBar>
    </Row>
    <Row>
        <Col md={6}>
          <CharacterListContainer handles={handles}/>
        </Col>
        <Col md={6}>
          <CharacterContainer character={characterSelected}/>
        </Col>
    </Row>
</Grid>
  );
}

export default App;
