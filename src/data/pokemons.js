const axios = require('axios');
async function getPokemomByID (id) {
  const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
    .data;
  return response;
}

async function pokemonList () {
  const promises = [];
  for (let i = 1; i <= 151; i += 1) {
    const newPromise = getPokemomByID(i);
    promises.push(newPromise);
  }
  const pokemons = await Promise.all(promises);
  return pokemons;
}
export default pokemonList;
