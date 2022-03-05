import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGeneric extends Component {
  render() {
    const { disableButtonLogin, name, handleClick } = this.props;
    return (
      <button
        type="button"
        disabled={ disableButtonLogin }
        onClick={ handleClick }
      >
        { name }
      </button>
    );
  }
}

export default ButtonGeneric;

ButtonGeneric.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disableButtonLogin: PropTypes.bool.isRequired,
};
