import React, { Component } from "react";
import "../style/header.css";

export default class Header extends Component {
  render() {
    const { userName } = this.props;
    const caps = (str) => {
      return str.charAt(0).toUpperCase() + str.substr(1);
    };
    return (
      <header>
        <section className="header">
          <div className="content__header">
            <h1 className="title__header">
              Olá, <span>{caps(userName)}!</span>
            </h1>
            <p>
              Esta é a sua{" "}
              <span className="subtitle__header">
                <a href="#maine">Pokedéx</a>
              </span>
              !
            </p>
          </div>
        </section>
      </header>
    );
  }
}
