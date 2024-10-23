let pokemons = ['Charmander', 'Pikachu', 'Bulbasaur'];

console.log('Removendo último pokemon: ');
pokemons.pop(); // removendo ultimo pokemon
console.log(pokemons);

console.log('\nAdicionando novo pokemon:');
pokemons.push('Bulbasaur Adicionado'); // adicionando pokemon
console.log(pokemons);


console.log('\nFiltrando pokemom Pikachu');  // filtrando pokemon Pikachu e imprimindo o resultado em um novo array
let pokemonFiltrado = pokemons.filter((pokemon) => pokemon === "Pikachu");
console.log(pokemonFiltrado);


console.log('\nRemovendo primeiro pokemon: ');  // removendo primeiro pokemon e imprimindo o resultado em um novo array
pokemons.shift(); // removendo primeiro pokemon
console.log(pokemons);
