import React, { Component } from "react";

import "../style/components/pokemon-card/card-Box.css";

export default class PokemonCard extends Component {
  render() {
    const { name, type, img } = this.props;
    return (
      <div className="card__box">
        <span className="pokemon__img">
          <img src={img} alt={name} />
        </span>
        <h1 className="title name__pokemon">{`Este(a) é ${name}`}</h1>
        <h2 className="title type__pokemon">{`Seu tipo é ${type}`}</h2>
      </div>
    );
  }
}
