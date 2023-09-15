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

function CheckValidPokemonId() {
    return function( target:any, propertyKey:string, descriptor:PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = ( id:number) => {
            if ( id < 1 || id > 1200) {
                return console.error( 'El id debe estar entre el 1 y el 1200' );
            }else{
                originalMethod(id);
            }
        }
    }
}





@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {
    public publicApi:string = 'https://pokeapi.co'
    public name:string

    constructor( name:string ){
        this.name = name
    }
    @CheckValidPokemonId()
    savePokemonToBD( id:number ){
        console.log( `Pokemon guardado en la BD ${id}` );
    }


}


