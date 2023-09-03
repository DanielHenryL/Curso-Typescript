(()=>{
    class Avenger{
        // private name:string;
        // public team:string;
        // public realName?:string;
        // propiedad estatica => se puede consumir de manera global haciendo referencia a la misma clase(no a la instancia de la clase)
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name // este ame es literalmente el nombre de la clase 'Avenger'
        }
        constructor( 
            private name:string,    
            private team:string, 
            public realName?:string
        ) {}
        // por defecto todo metodo es public, ni siquiera poniendole private bio().
        public bio(){
            return `${ this.name } (${this.team})`
        }
    }

    const antman:Avenger = new Avenger('Antman','Capitan','Scott Lang');
    // console.log( antman );
    // console.log( antman.bio() );
    console.log( Avenger.getAvgAge());

})()