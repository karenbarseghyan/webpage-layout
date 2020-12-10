import { IconButton } from '@material-ui/core';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import React, { useState } from 'react';

const Home = () => {
    const [counter, setCounter] = useState (0);
    return (
        <>
            <IconButton onClick = {()=>{setCounter(counter-1)}}>
                <RemoveCircle />
            </IconButton>
            <h3>
                {counter}
            </h3>
            <IconButton onClick = {()=>{setCounter(counter+1)}}>
                <AddCircle />
            </IconButton>
        </>
    );
}

export default Home;