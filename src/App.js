import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Profile from './components/content/Profile'
import DialogsContainer from './components/dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import {Route} from 'react-router-dom'

const App = (props) => {
  return (

    <div className="app-wrapper">
     <Header />
      <Sidebar />
      <div className='app-wrapper-content'>

        <Route path='/profile' render={() => <Profile  />} />
        <Route path='/dialogs' render={() => <DialogsContainer /> } />
        <Route path='/users' render={() => <UsersContainer /> } />
      </div>
    </div>

  );
}

export default App;
