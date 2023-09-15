function printToConsole( constructor: Function ){
    console.log( constructor );
}
const printToConsoleConditional = ( print:boolean = false ):Function => {
    if ( print ) {
        return printToConsole;
    }else{
        return () => {}
    }
}

const bloquearPrototipo = function( constructor:Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

@bloquearPrototipo
@printToConsoleConditional( true)
export class Pokemon {
    public publicApi:string = 'https://pokeapi.co'
    public name:string

    constructor( name:string ){
        this.name = name
    }
}


