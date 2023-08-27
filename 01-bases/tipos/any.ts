(() => {
    let avenger:any = 123;
    let exists:any;
    let power;

    avenger = 'Dr Strange';
    // castear la variable tipo 1
    console.log( ( avenger as string ).charAt(0) );

    avenger = 150.123456;
    // castear la variable tipo 2
    console.log( <number>avenger.toFixed(2) );

    console.log( exists );
    console.log( power );
})()