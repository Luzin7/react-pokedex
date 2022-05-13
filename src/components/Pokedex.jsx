import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import '../style/components/pokedex/main.css';
import '../style/components/pokedex/content-main.css';

export class Pokedex extends Component {
  render () {
    const { data } = this.props;
    return (
      <main>
        <section id="maine" className="main">
          <div className="content__main">
            {data.map((data) => (
              <PokemonCard
                key={data.name}
                order={data.id}
                name={data.name}
                type={data.types[0].type.name}
                img={data.sprites.front_default}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default Pokedex;
