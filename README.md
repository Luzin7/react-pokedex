# Projeto React Pokedéx

### Pré-requisitos
Para a realização desse projeto, deverá ser utilizado a API PokeAPI, com o endpoint https://pokeapi.co/api/v2/generation/1

O retorno dela é um objeto com diversas chaves, dentre elas a chave pokemon_species, onde estão todos os 151 pokemons da primeira geração, no entanto cada pokemon tem seu próprio endpoint, que também retorna um objeto com todas suas caracteristicas as quais serão utilizadas nos futuros requisitos.

O desafio é receber os 151 pokemons da primeira geração e renderizar não somente seu nome mas acessar sua url e suas chaves.

Documentação da API https://pokeapi.co/docs/v2#pokemon

(Dica: Passe um tempo tentando fazer o retorno correto do objeto, que deverá conter ao menos 10 pokemons, após resolvê-los, foque nos requisitos, e somente quando a aplicação estiver funcional trabalhe a estilização. Intercalar estilização e estrutação apenas faz perder o tempo que pode ser usado para implementar o código e faz perder a linha de raciocínio de desenvolvimento.)

## Requisitos do Projeto

### Obrigatórios

[.1] Crie um componente chamado Welcome, esse componente deverá conter um input do tipo 'text' com a label 'Usuário', e também um botão com a label 'Login'

[.2] O componente Welcome deverá ser renderizado no App.

[.3] O botão de Login, deverá ficar desabilitado, e só poderá ficar habilitado, se o campo do usuário tiver mais de 3 caracteres.

[.4] Após clicar no botão de Login, o componente Welcome não poderá mais ser renderizado, e ao invéz dele deverá ser renderizado o componente Pokedex.

(Dica: Pesquise como funciona operadores ternários, e combine ele com algum estado que guarda se o login foi feito ou não);

[.5] Crie um componente Pokedex, este componente deverá ter um componente Header.

(Dica: A requisição da API poderá ser feita ao clicar no botão login);

[.6] No Header, deverá ser renderizado uma tag <h1/> com a label 'Bem Vindo,' e logo em seguia o nome que o usuário digitou em seu login. Também deve conter uma tag <p/> com a label 'Esta é a sua Pokedéx!'

[.7]Crie um component PokemonCard que irá renderizar cada pokemon, também deverá conter um elemento que guarda a imagem do pokemon, e seu atributo 'alt' deverá ser o nome do pokemon.

[.8] O elemento que renderiza cada pokemon também deverá conter as tags <h1/>, <h2/> e <p/> que deverão rendezizar o nome do pokemon, seu tipo e sua descrição respectivamente.

[.9] O componente PokemonCard deverá ser renderizado no componente Pokedex abaixo do componente Header.

### Bônus

[.10] Na section do componente Pokedex, deverá ter um input do tipo 'text', no qual este input irá filtrar os pokemons renderizados, ou seja, se for digitado o nome Alakazan, só deverá aparecer o pokemon Alakazan.