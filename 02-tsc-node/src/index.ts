import { Pokemon } from "./decorators/pokemon";


const charmander = new Pokemon('charmander');
// (Pokemon.prototype as any).customName = 'pikachu';
// charmander.savePokemonToBD(1000);
charmander.publicApi = 'daniel.com'
console.log(  charmander );