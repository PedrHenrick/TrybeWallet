import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  totalExpenses = () => {
    const { expenses = '0' } = this.props;
    // const STARTING_COUNT = 0;
    if (expenses.length === 0) return 0;
    if (expenses.length > 0) {
      console.log('bolinho');
    }
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ this.totalExpenses() }</p>
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
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};
