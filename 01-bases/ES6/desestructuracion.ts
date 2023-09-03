(()=>{

    type Avengers= {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avenger:Avengers = {
        nick: 'Samuel ha',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo:true,
        poder:100.25345
    }
    // DESESTRUCTURAR
    // const { poder, vision} = avenger;
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    // DESESTRUCTURACION EN FUNCIONES
    const printAvenger = ( { poder, ...resto }:Avengers ) => {
        console.log( poder, resto.nick );
    }
    // printAvenger( avenger );

    const avengerArr:[string, boolean, number] = ['capitan america', true, 123.4561]

    const [ capitan, ironman, poder ] = avengerArr

    // console.log( { ironman, capitan} );

})()