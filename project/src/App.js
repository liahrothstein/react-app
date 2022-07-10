import React from 'react';
import './styles/App.css'
import Logo from './components/Logo';
import GridContainer1 from './components/GridContainer1';
import ErrorAndAuthor from './components/ErrorAndAuthor';
import SideBar from './components/SideBar';
import LoginAndSignIn from './components/LoginAndSignIn';
import PostComment from './components/PostComment';
import Comments from './components/Comments';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Logo/>
      <GridContainer1/>
      <ErrorAndAuthor/>
      <SideBar/>
      <LoginAndSignIn/>
      <PostComment/>
      <Comments/>
      <Navigation/>
      <Footer/>
    </div>
  );
}

export default App;
