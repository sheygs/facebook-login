import dotenv from 'dotenv';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../App.css';
dotenv.config();

export default class FaceBookAuth extends Component {
 state = {
   loggedIn: false,
   userID: '',
   name: '',
   email: '',
   picture: ''
 }

 responseFacebook = response => {
   const { userID, name, email, picture: { data: { url }}} = response;
   this.setState({
     loggedIn: true,
     userID,
     name,
     email,
     picture: url
   })
 }

 componentClicked = () => console.log('It works');

 render() {
  const { loggedIn, picture, name, email } = this.state;
  return (
    <div>
      { 
        !loggedIn ? 
        (<FacebookLogin
            appId={process.env.REACT_APP_ID}
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />) : 
          (<div className="card">
            <img src={picture} alt={name} styles={{display: 'block', width:'100%'}}/>
              <h1>{name}</h1>
              <p className="email">{email}</p>          
          </div>)
      }      
   </div>
  )
 }
}
