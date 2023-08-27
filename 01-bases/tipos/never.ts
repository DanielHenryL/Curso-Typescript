(() => {
    // esta funcion especificada como never, no debe acabar exitosamente
    // la funcion hara que el codigo salga error y se termine
    const error = ( message:string ):never => {
        
        throw new Error( message )
       
    }
    error('algo salio mal');

    // no se ejecutará
    console.log( 'hola' );
})();