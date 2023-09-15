import { Pokemon } from "./decorators/pokemon";


const charmander = new Pokemon('charmander');
// (Pokemon.prototype as any).customName = 'pikachu';


console.log( charmander );