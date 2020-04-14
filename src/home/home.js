import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const withHome = (WrappedComponent) => (props) => {
    
    const [searchText, setSearchText] = useState('');

    const handleOnChange = event => {
        setSearchText(event.target.value);
    };

    return (
        <div>
            <div className="home-search-box">
                <TextField label={'Buscar...'} onChange={handleOnChange} />
            </div>
            <WrappedComponent {...props} searchText={searchText} />
        </div>
    );
};


export default withHome;