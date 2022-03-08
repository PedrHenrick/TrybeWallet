import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderWallet from '../component/HeaderWallet';
import AddExpenseForm from '../component/AddExpenseForm';
import AddTableForExpense from '../component/AddTableForExpense';
import asyncThunk from '../actions';

class Wallet extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(asyncThunk());
  }

  render() {
    return (
      <main>
        <HeaderWallet />
        <AddExpenseForm />
        <AddTableForExpense />
      </main>
    );
  }
}

export default connect()(Wallet);

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
