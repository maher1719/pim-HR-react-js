import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Register, Login } from './features/auth';
import MaterialCss  from './features/auth/MaterialCss';
import MaterialJs  from './features/auth/MaterialJs';
import D from "./features/dashboard/Dashboard";
import HeaderFeature from './components/layout/HeaderFeature';
import Sidebar from './components/layout/SideBar';
import Content from './components/layout/Content';
import Landing from './components/layout/Landing';
import Profile from "./components/layout/Profile";
import PrivateRoute from './components/private-route/PrivateRoute';
import checkAuth from './utils/checkAuth';
import store from './store';
import { Dashboard } from 'features/dashboard';

const App = () => {
  // Check if user is already logged in
  useEffect(() => {
    checkAuth(store);
  }, []);
  return (
    <Router>
      <div className='App'>


        <Route exact path='/' >
          <MaterialCss />
          <Landing/>
          <MaterialJs />
        </Route>
        <Route exact path='/Login' >
          <MaterialCss />
          <Login />
          <MaterialJs />
        </Route>
        <Route exact path='/Register' >
          <MaterialCss />
          <Register />
          <MaterialJs />
        </Route>


        <Switch>

          <PrivateRoute exact path='/dashboard'  >
            <HeaderFeature />
            <Sidebar />
            <Content/>
          </PrivateRoute>
          <PrivateRoute exact path='/d'  >
            <D/>
          </PrivateRoute>
          <PrivateRoute exact path='/Profile'  >
            <HeaderFeature />
            <Sidebar />
            <Profile />
          </PrivateRoute>

        </Switch>
      </div>
    </Router>
  );
};
export default App;

