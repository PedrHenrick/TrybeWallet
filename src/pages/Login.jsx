import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setUser from '../redux/actions';
import ButtonGeneric from '../component/ButtonGeneric';
import InputGeneric from '../component/InputGeneric';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableButtonLogin: true,
    };
  }

  componentDidUpdate() {
    const { email, password, disableButtonLogin } = this.state;
    const PASSWORD_MIN = 6;

    // Referência de validação de e-mail: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const validateEmail = () => {
      const caracter = /\S+@\S+\.\S+/;
      return caracter.test(email);
    };

    const arrayValid = [
      password.length >= PASSWORD_MIN,
      validateEmail(),
    ];

    if (arrayValid.every((item) => item === true) && disableButtonLogin === true) {
      this.handleChangeDisable(false);
    } else if ((!arrayValid.every((item) => item === true))
      && disableButtonLogin === false) {
      this.handleChangeDisable(true);
    }
  }

  handleChangeDisable = (value) => {
    this.setState({
      disableButtonLogin: value,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { email } = this.state;
    const { getUser, history } = this.props;
    getUser(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disableButtonLogin } = this.state;
    return (
      <main>
        <form>
          <InputGeneric
            type="email"
            name="email"
            value={ email }
            data="email-input"
            handleChange={ this.handleChange }
          />
          <InputGeneric
            type="password"
            name="password"
            value={ password }
            data="password-input"
            handleChange={ this.handleChange }
          />
        </form>
        <ButtonGeneric
          name="Entrar"
          disableButtonLogin={ disableButtonLogin }
          handleClick={ this.handleClick }
        />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUser: (email) => dispatch(setUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  getUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
