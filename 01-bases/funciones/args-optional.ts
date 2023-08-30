(() => {
    // argumento opcional 'lastName?: strign'
    const fullName = ( firstName: string , lastName?: string ): string => {

        return `${ firstName } ${ lastName || '' }`.trim();

    }

    const name = fullName( 'Tony   ' );

    console.log( { name:name } );

})()