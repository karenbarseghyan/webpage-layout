import { Button } from '@material-ui/core';
import React from 'react'
import {NavLink as RouterNavLink} from 'react-router-dom';

const CourseButton = ({type, to, children,   ...props}) => {

    switch(type) {
        case 'navigation':
            return (
                <Button color = "inherit" component = {RouterNavLink} to >
                  {children}
                  
                </Button>
            )
            default: 
            return (
                <Button color ="inherit"> 
                    {children}
                </Button>
            )
    }
}

export default CourseButton;