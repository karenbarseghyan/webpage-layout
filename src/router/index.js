import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, Repositories, Users} from '../containers/views';
import {MainLayout} from '../containers/layouts';
import {Header} from "../components/common";

const MainRouter = () => {
  return (
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
  )
}

export default MainRouter;