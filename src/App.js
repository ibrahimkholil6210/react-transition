import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    showModal: false
  }

  openModal = (e) => {
    this.setState({
      showModal: true
    })
  }

  closeModal = (e) => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.showModal} closed={this.closeModal} />
        <Backdrop show={this.state.showModal} />
        <button className="Button" onClick={this.openModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
