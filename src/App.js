import { useState } from 'react';

import './css/app.scss';
import Home from './pages/Home';

import FriendList from './pages/FriendList';
import FriendPage from './pages/FriendPage';
import Donate from './pages/Donate';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

import AppContext from './providers/AppDataProvider';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

let userInfo = JSON.parse(localStorage.getItem('session') || null);

let globalState = {
  userInfo: userInfo,
  cart: null,
}


const App = () => {
  const [ appInfo, setAppInfo ]  = useState(globalState);

  return (
    <Router>
      <AppContext.Provider value={{appInfo, setAppInfo}}>
        <div className="wrapper">
          <Header />

          <Switch>
            <Route path="/ayudar-un-amigo">
              <FriendList />
            </Route>
            <Route path="/ayudar">
              <FriendPage />
            </Route>
            <Route path="/donaciones">
              <Donate />
            </Route>
            <Route path="/registro">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/perfil">
              <Profile />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
          <div className="push"></div>
        </div>
        <Footer />
      </AppContext.Provider>
    </Router>

    
  );
}



export default App;
