(() => {
    // const numbers: ( number | string | boolean ) [] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
    numbers.push(11);
    console.log( numbers );

    const villians: string[] = ['Omega Rojo', 'Dormammu','Duende Verde'];

    villians.forEach( v => console.log( v.toUpperCase() ));

})();