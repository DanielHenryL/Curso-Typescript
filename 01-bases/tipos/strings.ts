(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna verde';
    const volcanNegro: string = `Héroe: Volcan negro`;

    console.log( `I'm ${ batman }` );
    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || 'No esta presente' );
})()