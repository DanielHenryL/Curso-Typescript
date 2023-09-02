(() => {

    type Hero = {
        name:string,
        age?:number,
        power:string[],
        getName?:() => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        power:['Super velocidad', 'Viajar en el tiempo'],
    }
    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        power:['Super velocidad'],
        getName() {
            return this.name;
        },
    }



})()