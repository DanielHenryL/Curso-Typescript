(() => {
    let avengers:number = 10;
    console.log( avengers );

    const villians:number = 20;

    if ( avengers < villians ) {
        console.log( 'Estamos en problemas' );
    }else{
        console.log( 'Nos salvamos' );
    }

    avengers = Number('1231a'); // esto devuelve 'NaN' que es considerado un numero en js.
    console.log( { avengers } );
})()