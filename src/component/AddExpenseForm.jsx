import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonGeneric from './ButtonGeneric';
import InputGeneric from './InputGeneric';
import TextareaGeneric from './TextareaGeneric';
import SelectGeneric from './SelectGeneric';
import asyncThunk from '../redux/actions';

class AddExpenseForm extends Component {
  state = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    disableButtonLogin: true,
  }

  componentDidUpdate() {
    const { value, disableButtonLogin } = this.state;

    if (value > 0 && disableButtonLogin === true) {
      this.handleChangeDisable(false);
    } else if (value <= 0 && disableButtonLogin === false) {
      this.handleChangeDisable(true);
    }
  }

  handleChangeDisable = (value) => {
    this.setState({
      disableButtonLogin: value,
    });
  };

  handleClick = () => {
    const { value, description, currency, method, tag } = this.state;
    const { expenses, asyncThunkDispath } = this.props;

    const expense = { id: expenses.length, value, description, currency, method, tag };
    asyncThunkDispath({ ...expense });

    this.setState({ value: 0, description: '' });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
      disableButtonLogin,
    } = this.state;

    // const { coin } = this.props;

    return (
      <form>
        <InputGeneric
          type="number"
          name="value"
          labelName="Valor da despesa"
          data="value-input"
          value={ value }
          handleChange={ this.handleChange }
        />

        <TextareaGeneric
          name="description"
          labelName="Descrição"
          data="description-input"
          value={ description }
          handleChange={ this.handleChange }
        />

        <SelectGeneric
          name="currency"
          value={ currency }
          labelName="Moeda"
          data="currency-input"
          handleChange={ this.handleChange }
        />

        <SelectGeneric
          name="method"
          value={ method }
          labelName="Metodo de pagamento"
          data="method-input"
          handleChange={ this.handleChange }
        />

        <SelectGeneric
          name="tag"
          value={ tag }
          labelName="Motivo da despesa"
          data="tag-input"
          handleChange={ this.handleChange }
        />

        <ButtonGeneric
          name="Adicionar despesa"
          disableButtonLogin={ disableButtonLogin }
          handleClick={ this.handleClick }
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  asyncThunkDispath: (expense) => dispatch(asyncThunk(expense)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  // coin: state.wallet.coin,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);

AddExpenseForm.propTypes = {
  // coin: PropTypes.arrayOf(PropTypes.any).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  asyncThunkDispath: PropTypes.func.isRequired,
};
