// //da pra melhorar isso aí, tenta dps
// const pokeRequest = async () => {
//   try {
//     const pokeListRequest = await fetch(
//       "https://pokeapi.co/api/v2/generation/1"
//     );
//     const pokeList = (await pokeListRequest.json()).pokemon_species;
//     for (const key of pokeList) {
//       key.info = await fetch(key.url)
//         .then((resp) => resp.json())
//         .then((resp) => console.log(resp));
//     }
//     let pokemons = Promise.all(pokeList);
//     console.log(pokemons)
//     return pokeList;
//   } catch (error) {
//     throw Error("error, my guy");
//   }
// };
// pokeRequest();
// var promise = pokeRequest();
// promise.then((pokemonList) => console.log(pokemonList));

// export default pokeRequest;

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
