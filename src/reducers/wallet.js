// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const GET_WALLET = 'GET_WALLET';
export const ALL_CURRENCYS = 'ALL_CURRENCYS';
export const REQUEST_COINS = 'REQUEST_COINS';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

const wallet = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = wallet, action) => {
  switch (action.type) {
  case GET_WALLET:
    return ({
      ...state,
      expenses: [...state.expenses, action.userExpense],
    });
  case ALL_CURRENCYS:
    return ({
      ...state,
      coin: action.currencys,
    });
  case DELETE_EXPENSES:
    return ({
      ...state,
      expenses: state.expenses.filter((expense) => expense !== action.deleteExpense),
    });
  default:
    return state;
  }
};

export default walletReducer;
