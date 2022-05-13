import React from 'react';
import pokeRequest from './data/pokemons';
import Pokedex from './components/Pokedex';
import Header from './components/Header';
import './style/normalize.css';
import './style/reset.css';
import './style/home.css';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      userName: '',
      // Estado criado pra condicionar o 'disabled' do botao no App
      disabled: true,
      logged: false,
      data: null
    };
  }

  // Pegando o valor do target
  handleChange = ({ target }) => {
    // extraindo name e value de target
    const { name, value } = target;
    // atualizando 'userName' com o valor da 'name'
    this.setState({ [name]: value }, () => {
      this.verifyUserLenght();
    });
  };

  verifyUserLenght = () => {
    // extraindo userName do state
    const { userName, disabled } = this.state;
    // Condicionando 'disabled' do botão
    if (userName.length >= 3 && disabled === true) {
      this.setState({ disabled: false });
    } else if (userName.length === 0 && disabled === false) {
      // Atualizando o valor do toggle para 'true'
      this.setState({ disabled: true });
    }
  };

  renderPokedex = async () => {
    const pokeReq = await pokeRequest();
    this.setState({ logged: true, data: pokeReq });
  };

  render () {
    const { userName, disabled, logged, data } = this.state;
    return (
      <div>
        {logged
          ? (
          <>
            <Header userName={userName} />
            <Pokedex data={data} />
          </>
            )
          : (
          <div className="container">
            <h1 className="title title__welcome">Welcome</h1>
            <form className="form">
              <label className="form__label">User</label>
              <input
                onChange={this.handleChange}
                className="form__name__input"
                type="text"
                placeholder="Your username here"
                name="userName"
              />
              <div className="button__area">
                <button
                  className="form__login__button"
                  onClick={this.renderPokedex}
                  type="button"
                  disabled={disabled}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
            )}
      </div>
    );
  }
}
