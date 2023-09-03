(()=>{
    class Avenger{
        private name:string;
        public team:string;
        public realName?:string;
        // propiedad estatica => se puede consumir de manera global haciendo referencia a la misma clase(no a la instancia de la clase)
        static avgAge: number = 35;

        constructor( name:string, team:string, realName?:string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman:Avenger = new Avenger('Antman','Capitan','Scott Lang');
    // console.log( antman );
    console.log( antman );

})()