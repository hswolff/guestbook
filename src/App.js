import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuestBookInput from './GuestBookInput';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    entries: [
      'Welcome!'
    ],
  };

  onGuestBookEntry = (value) => {
    this.setState({
      entries: this.state.entries.concat(value),
    })
  }

  render() {
    const {
      entries,
    } = this.state;

    const {
      messages
    } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to My Guestbook!!!</h2>
        </div>
        <GuestBookInput
          submitText="Sign it yo!"
          onGuestBookEntry={this.onGuestBookEntry}
        />
        <section>
          {messages.map((entry, index) => (
            <article key={index}>{entry}</article>
          ))}
        </section>
        <section>
          {entries.map((entry, index) => (
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
  }
)(App);

export default ConnectedApp;
