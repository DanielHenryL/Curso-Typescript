(()=>{
    // La unica diferencia que tienee una interface de un type es que las interface se extends como si fuera
    // una classe
    interface Hero {
        name:string,
        age?:number,
        power:string[],
        getName?:() => string
    }

    interface Soldado extends Hero{
        nameReal:string
    }
    
    let flash: Soldado = {
        name: 'Barry Allen',
        age: 24,
        power:['Super velocidad', 'Viajar en el tiempo'],
        nameReal:'ayuida'
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