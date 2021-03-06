// Coloque aqui suas actions
import getResultAPICurrency from '../services/currencyAPI';
import { GET_USER } from '../reducers/user';
import { GET_WALLET, ALL_CURRENCYS, DELETE_EXPENSES } from '../reducers/wallet';

export const setUser = (email) => ({
  type: GET_USER,
  userEmail: email,
});

const setCurrency = (coin) => ({
  type: ALL_CURRENCYS,
  currencys: coin,
});

export const deleteExpenses = (expense) => ({
  type: DELETE_EXPENSES,
  deleteExpense: expense,
});

const setExpense = (expense) => ({
  type: GET_WALLET,
  userExpense: { ...expense },
});

const asyncThunk = (expense = []) => (
  async (dispatch) => {
    const data = await getResultAPICurrency();

    const objectEntries = Object.entries(data);
    const objectfromEntries = Object.fromEntries(objectEntries);

    dispatch(setCurrency(objectEntries));
    const expensesInfo = {
      ...expense,
      exchangeRates: objectfromEntries,
    };
    return (
      expense.length !== 0 ? dispatch(setExpense(expensesInfo)) : null
    );
  }
);

export default asyncThunk;
