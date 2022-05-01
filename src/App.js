import React, { Component } from "react";
import pokeRequest from "./data/pokemons";
import Pokedex from "./components/Pokedex";
import Header from "./components/Header";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      //Estado criado pra condicionar o 'disabled' do botao no App
      disabled: true,
      logged: false,
      data: null,
    };
  }
  //Pegando o valor do target
  handleChange = ({ target }) => {
    //extraindo name e value de target
    const { name, value } = target;
    //atualizando 'userName' com o valor da 'name'
    this.setState({ [name]: value }, () => {
      this.verifyUserLenght();
    });
  };

  verifyUserLenght = () => {
    //extraindo userName do state
    const { userName, disabled } = this.state;
    //Condicionando 'disabled' do botão
    if (userName.length >= 3 && disabled === true) {
      this.setState({ disabled: false });
    } //Deixar o botao inativo de inicio
    else if (userName.length === 0 && disabled === false) {
      //Atualizando o valor do toggle para 'true'
      this.setState({ disabled: true });
    }
  };

  renderPokedex = async () => {
    const pokeReq = await pokeRequest();
    this.setState({ logged: true, data: pokeReq });
  };
  
  render() {
    const { userName, disabled, logged, data } = this.state;
    return (
      <div>
        {logged ? (
          <>
            <Header userName={userName} />
            <Pokedex data={data} />
          </>
        ) : (
          <form className="form">
            <label className="form__name__label">User</label>
            <input
              onChange={this.handleChange}
              className="form__name__input"
              type="text"
              name="userName"
            />
            <label className="form__login__label">Login</label>
            <button
              onClick={this.renderPokedex}
              className="form__login__button"
              type="button"
              disabled={disabled}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}
