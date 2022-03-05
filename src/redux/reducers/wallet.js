// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const SET_WALLET = 'SET_WALLET';

const wallet = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = wallet, action) => {
  switch (action.type) {
  case SET_WALLET:
    return {
      ...state,
      wallet: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
