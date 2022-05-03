import React, { Component } from "react";
import "../style/header.css";

export default class Header extends Component {
  render() {
    const { userName } = this.props;
    return (
      <header>
        <section className="header">
          <div className="content__header">
            <h1 className="title title__header">Olá, <span>{userName}!</span></h1>
            <p>
              Esta é a sua <span>Pokedéx</span>!
            </p>
          </div>
        </section>
      </header>
    );
  }
}
