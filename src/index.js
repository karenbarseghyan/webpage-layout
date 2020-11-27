import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, Repositories, Users} from './components/views'
import {Header} from "./components/common/index";

ReactDOM.render(
  <>
  
    <Router>
      <Header />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route 
          path = "/home"
          component = {Repositories}
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
    </Router>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
