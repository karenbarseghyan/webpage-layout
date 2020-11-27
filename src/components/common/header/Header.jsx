import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
// import {CourseButton} from '../../button'
import './Header.css'

const Header = () => {

  return(
    <AppBar position="static">
      <Toolbar >   
        {/* <CourseButton /> */}
         <Button color = "inherit" component = {RouterNavLink} to="/home" activeClassName = "AppBar__Button--active">
          Home 
        </Button>
        <Button color = "inherit" component = {RouterNavLink} to="/users" activeClassName = "AppBar__Button--active">
          Users 
        </Button>
        <Button color = "inherit" component = {RouterNavLink} to="/repositories" activeClassName = "AppBar__Button--active">
          Repositories
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header; 