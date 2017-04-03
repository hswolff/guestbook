import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuestBookInput from './GuestBookInput';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const {
      messages,
      addMessage,
    } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to My Guestbook!!!</h2>
        </div>
        <GuestBookInput
          submitText="Sign it yo!"
          onGuestBookEntry={addMessage}
        />
        <section>
          {messages.map((entry, index) => (
            <article key={index}>{entry}</article>
          ))}
        </section>
      </div>
    );
  }
}

const ConnectedApp = connect(
  function mapStateToProps(state) {
    return {
      messages: state.messages,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addMessage: (message) => dispatch({
        type: 'addMessage',
        payload: message,
      }),
    };
  },
)(App);

export default ConnectedApp;
