import { IconButton } from '@material-ui/core';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incrementCounter, decrementCounter} from '../../../redux/actions/homeActions'

const Home = () => {
    // const [counter, setCounter] = useState (0);
    const counter = useSelector(state => state.Home.counter)
    const dispatch = useDispatch();

    return (
        <>
            <IconButton onClick = { () => dispatch(decrementCounter())}>
                <RemoveCircle />
            </IconButton>
            <h3>
                {counter}
            </h3>
            <IconButton onClick = { () => dispatch(incrementCounter())}>
                <AddCircle />
            </IconButton>
        </>
    );
}

export default Home;