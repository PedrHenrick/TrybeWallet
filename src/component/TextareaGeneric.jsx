import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextareaGeneric extends Component {
  render() {
    const {
      value = '',
      handleChange = () => {},
      name = '',
      data = '',
      labelName = '',
    } = this.props;
    return (
      <label htmlFor={ name }>
        { labelName }
        <textarea
          name={ name }
          value={ value }
          data-testid={ data }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default TextareaGeneric;

TextareaGeneric.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
