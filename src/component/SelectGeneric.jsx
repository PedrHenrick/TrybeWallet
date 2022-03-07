import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectGeneric extends Component {
  state = {
    values: [],
  }

  verifyValuesType = (values) => {
    const ARRAY_LEGNTH = 6;
    return values.length < ARRAY_LEGNTH
      ? values.map((curr) => <option key={ curr }>{ curr }</option>)
      : values
        .map(
          (curr) => <option key={ curr[0] } data-testid={ curr[0] }>{ curr[0] }</option>,
        );
  }

  render() {
    let { values } = this.state;
    const {
      value = '',
      labelName = '',
      handleChange = () => {},
      name = '',
      data = '',
      coin,
    } = this.props;

    if (data === 'method-input') {
      values = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    } else if (data === 'tag-input') {
      values = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    } else if (data === 'currency-input' && coin !== undefined) {
      const currency = coin;
      values = currency.filter((curr) => curr[0] !== 'USDT');
    }

    return (
      <label htmlFor={ name }>
        { labelName }
        <select
          name={ name }
          id={ name }
          value={ value }
          data-testid={ data }
          onChange={ handleChange }
        >
          { values === undefined ? null : this.verifyValuesType(values) }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  coin: state.wallet.coin,
});

export default connect(mapStateToProps)(SelectGeneric);

SelectGeneric.propTypes = {
  value: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  coin: PropTypes.arrayOf(PropTypes.any).isRequired,
};
