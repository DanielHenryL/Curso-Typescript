import { genericFunction, printObject, genericFunctionArrow } from "../generics/generics";
import { Villain, Hero } from "../interfaces";

// printObject( 123 );
// printObject( new Date() );
// printObject( {a:1,b:2,c:3,d:4});
// printObject( [1,2,3,4,5,6,7,8,9,10]);
// printObject( 'hola mundo' );

// console.log( genericFunction(3.1416).toFixed(2) );
// console.log( genericFunction('Hola mundo').toUpperCase() );
// console.log( genericFunctionArrow(new Date()).getDate() );

const deadpool = {
    name:'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}
console.log( genericFunctionArrow<Hero>(deadpool).name );

