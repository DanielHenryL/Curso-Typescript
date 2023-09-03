(()=>{

    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman:Avenger = {
        name:'tony',
        weapon:'Armorsuit'
    }
    const capAmerican:Avenger = {
        name:'Capitan America',
        weapon:'Escudo'
    }
    const thor:Avenger = {
        name:'Thor',
        weapon:'Mjolnir'
    }

    const avengers: Avenger[] = [ ironman, capAmerican, thor ]

    for (const avenger of avengers) {
        console.log( { nombre:avenger.name, arma:avenger.weapon} );
    }
})()