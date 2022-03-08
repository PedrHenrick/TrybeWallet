import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  render() {
    const { email = '', expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        {/*
          Referência:
            -Paolo: https://github.com/tryber/sd-018-b-project-trybewallet/pull/1/
            Reduce: https://blog.betrybe.com/javascript/javascript-reduce/
        */}
        <p data-testid="total-field">
          {
            expenses.reduce((acumulador, currentValue) => acumulador
            + (currentValue.value
              * parseFloat(currentValue.exchangeRates[currentValue.currency].ask)), 0)
          }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(HeaderWallet);

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
