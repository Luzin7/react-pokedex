import React, { Component } from "react";

export default class PokemonCard extends Component {
  render() {
    const { name, type, img } = this.props;
    return (
      <div>
        <section>
          <div>
            <span>
              <img src={img} alt={name} />
            </span>
            <h1>{`Este(a) é ${name}`}</h1>
            <h2>{`Seu tipo é ${type}`}</h2>
          </div>
        </section>
      </div>
    );
  }
}
