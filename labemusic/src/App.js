import React from 'react';
import './App.css';
import MusicListPage from './components/MusicListPage.js/MusicListPage';
import SignUpPage from './components/SignUpPage/SignUpPage';


export default class App extends React.Component {

  state = {
    currentPage: "SignUp",
  };

  changePage = () => {
    if(this.state.currentPage === "SignUp") {
      this.setState({currentPage: "musicList"});
    } else {
      this.setState({currentPage: "SignUp"});
    }

  }

  render(){
    return (

      <div>
        <button onClick={this.changePage}>Trocar de Tela</button>
       {this.state.currentPage === "SignUp" ? <SignUpPage/> : <MusicListPage/>}

      </div>
    
    );


  }
 
}


