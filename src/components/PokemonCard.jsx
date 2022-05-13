import React, { Component } from 'react';
import '../style/components/pokemon-card/card-Box.css';
import '../style/components/pokemon-card/card-Content.css';

export default class PokemonCard extends Component {
  render () {
    const { order, name, type, img } = this.props;
    const caps = (str) => {
      return str.charAt(0).toUpperCase() + str.substr(1);
    };
    return (
      <div className="card__box">
        <div className="pokemon__img__box">
          <img className="pokemon__img" src={img} alt={name} />
        </div>
        <div className="card__content">
          <div className="pokemon__order">
            <span className="order">{`#${order}`}</span>
          </div>
          <h1 className="title name__pokemon">{`Este(a) é ${caps(name)}`}</h1>
          <h2 className="type__pokemon">{`Seu tipo é ${caps(type)}`}</h2>
        </div>
      </div>
    );
  }
}
