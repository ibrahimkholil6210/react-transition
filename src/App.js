import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    showModal: false,
    showBlock: false
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

  handleClick = (e) => {
    this.setState((prevState) => ({ showBlock: !prevState.showBlock }));
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <div>
          <button className="Button" onClick={this.handleClick}>Toggle</button>
        </div>
        <Transition in={this.state.showBlock} timeout={300} mountOnEnter unmountOnExit>
          {state => (
            <div
              style={{
                backgroundColor: "red",
                width: 100, height: 100,
                margin: "auto",
                opacity: state === 'exiting' ? 0 : 1,
                transition: "opacity 1s ease-out"
              }}>
            </div>)}
        </Transition>
        <Transition in={this.state.showModal} timeout={500} mountOnEnter unmountOnExit>
          {state => (
            <Modal show={state} closed={this.closeModal} />
          )}
        </Transition>
        <Backdrop show={this.state.showModal} />
        <button className="Button" onClick={this.openModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
