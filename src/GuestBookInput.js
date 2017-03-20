import React, { Component, PropTypes, } from 'react';


export default class GuestBookInput extends Component {
  static propTypes = {
    submitText: PropTypes.string,
    onGuestBookEntry: PropTypes.func.isRequired,
  }

  static defaultProps = {
    submitText: 'Submit Please!',
    onGuestBookEntry: () => {}
  }

  state = {
    inputText: '',
  };

  onChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  }

  onButtonClick = (e) => {
    e.preventDefault();

    this.props.onGuestBookEntry(this.state.inputText);
    this.setState({
      inputText: '',
    });
  }

  render() {
    const {
      submitText,
    } = this.props;
    const {
      inputText,
    } = this.state;

    return (
      <form onSubmit={this.onButtonClick}>
        <input
          type="text"
          style={{
            border: '2px solid red'
          }}
          value={inputText}
          onChange={this.onChange}
        />
        <input
          type="button"
          value={submitText}
          onClick={this.onButtonClick}
        />
      </form>
    )
  }
}
