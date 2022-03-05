import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGeneric extends Component {
  render() {
    const { type, value, handleChange, name, data } = this.props;
    return (
      <label htmlFor="input">
        <input
          type={ type }
          name={ name }
          value={ value }
          data-testid={ data }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default InputGeneric;

InputGeneric.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
