
export const printObject = ( argument:any ) => {
    console.log( argument );
}
//Funcion tradicional
export function genericFunction<T>( argument:T ):T {
    return argument;
}
// Funcion de flecha
export const genericFunctionArrow = <T>( argument:T ):T => {
    return argument;
}