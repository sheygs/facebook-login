import React from 'react';
import logo from './logo.svg';
import  FaceBookAuth from './components/FaceBookAuth';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Facebook Auth</h2>
      </header>
      <p>Don't have an account? Login in with Facebook</p>
      <FaceBookAuth />
    </div>
  );
}

export default App;
