const pokeRequest = async () => {
    try {
      const fetchRequest = await fetch('https://pokeapi.co/api/v2/generation/1');
      const data = await fetchRequest.json();
      return data.pokemon_species;
    } catch (error) {
      throw new Error('You must provide an url');
    }
  };
 var promise = pokeRequest();
 promise.then(pokemonList => console.log(pokemonList))

export default pokeRequest;
