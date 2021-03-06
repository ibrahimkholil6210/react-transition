import React, { Component } from "react";
import CSSTransition from 'react-transition-group/CSSTransition';
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
        <CSSTransition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          classNames={{
            enterActive: 'BlockOpen',
            exitActive: 'BlockClose'
          }}
        >
          <div className="Block">
          </div>
        </CSSTransition>
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
