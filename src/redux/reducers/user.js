// Esse reducer será responsável por tratar as informações da pessoa usuária
export const GET_USER = 'GET_USER';

const store = {
  email: '',
};

const userReducer = (state = store, action) => {
  switch (action.type) {
  case GET_USER:
    return {
      ...state,
      email: action.userEmail,
    };
  default:
    return state;
  }
};

export default userReducer;
