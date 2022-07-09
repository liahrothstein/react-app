import React from 'react';
import './styles/App.css'
import Logo from './components/Logo';
import GridContainer1 from './components/GridContainer1';
import ErrorAndAuthor from './components/ErrorAndAuthor';
import SideBar from './components/SideBar';
import LoginAndSignIn from './components/LoginAndSignIn';
import PostComment from './components/PostComment';

function App() {
  return (
    <div className="App">
      <Logo/>
      <GridContainer1/>
      <ErrorAndAuthor/>
      <SideBar/>
      <LoginAndSignIn/>
      <PostComment/>
    </div>
  );
}

export default App;
