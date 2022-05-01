import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

export class Pokedex extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((data) => (
          <PokemonCard
            key={data.name}
            name={data.name}
            type={data.types[0].type.name}
            img={data.sprites.front_default}
          />
        ))}
      </div>
    );
  }
}

export default Pokedex;
