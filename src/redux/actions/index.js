// Coloque aqui suas actions
import { GET_USER } from '../reducers/user';

const setUser = (email) => ({ type: GET_USER, userEmail: email });

export default setUser;
