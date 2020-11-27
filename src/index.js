import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, Repositories, Users} from './containers/views'
import {MainLayout} from './containers/layouts'
import {Header} from "./components/common/index";


ReactDOM.render(
  <>
  
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route 
           path = "/home"
           component = {Home}
           />
          <Route 
            path = "/users"
            component = {Users}
          />
          <Route 
            path = "/repositories"
            component = {Repositories}
          />
        </Switch>
      </MainLayout>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    </Router>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
