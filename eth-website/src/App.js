import React from "react";
import "./App.css";
import { Component } from "react";
import ConnectWallet from "./components/ConnectWallet";
import BCCLogo from './photo_2022-03-11_12-33-36.jpg';




class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <ConnectWallet/>
        <img src={BCCLogo} alt="BCC Logo"/>
        <p>Accept me pls</p>
      </div> 
    );
  }
}

export default App;
