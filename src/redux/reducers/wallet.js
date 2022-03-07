// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const GET_WALLET = 'GET_WALLET';
export const ALL_CURRENCYS = 'ALL_CURRENCYS';
export const REQUEST_COINS = 'REQUEST_COINS';

const wallet = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const walletReducer = (state = wallet, action) => {
  switch (action.type) {
  case GET_WALLET:
    return ({
      ...state,
      expenses: [...state.expenses, action.userExpense],
      totalExpenses: state.totalExpenses + action.valueExpense,
    });
  case ALL_CURRENCYS:
    return ({
      ...state,
      coin: action.currencys,
    });
  default:
    return state;
  }
};

export default walletReducer;
