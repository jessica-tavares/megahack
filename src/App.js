import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import Prontuario from './pages/Prontuario';
import Agendamento from './pages/Agendamento';
import CheckList from './pages/CheckList';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginScreen} />
        <Route path='/home' component={HomeScreen} />
        <Route path='/prontuario' component={Prontuario} />
        <Route path='/agendamentos' component={Agendamento} />
        <Route path='/check-list' component={CheckList} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
