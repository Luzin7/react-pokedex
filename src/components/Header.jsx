import React, { Component } from "react";
import '../style/header.css'

export default class Header extends Component {
  render() {
    const { userName } = this.props;
    return (
      <header>
        <section>
          <div>
            <h1>{`Olá! seja bem vindo(a), ${userName}.`}</h1>
            <p>Esta é a sua Pokedéx!</p>
          </div>
        </section>
      </header>
    );
  }
}
