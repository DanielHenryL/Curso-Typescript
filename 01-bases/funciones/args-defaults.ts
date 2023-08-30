(() => {
    // mandar un argumento por defecto 'upper = false'
    const fullName = ( firstName: string , lastName?: string, upper:boolean = false ): string => {

        if ( upper ) {
            return `${ firstName } ${ lastName || '' }`.trim().toUpperCase();
        }
        return  `${ firstName } ${ lastName || '' }`.trim();

    }

    const name = fullName( 'Tony', 'Stark', true );

    console.log( { name:name } );

})()