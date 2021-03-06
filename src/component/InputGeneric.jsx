import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGeneric extends Component {
  render() {
    const {
      type = 'text',
      value = '',
      handleChange = () => {},
      name = '',
      data = '',
      labelName = '',
    } = this.props;
    return (
      <label htmlFor={ name }>
        { labelName }
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
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  data: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
