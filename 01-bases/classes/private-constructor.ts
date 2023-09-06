(()=>{
    class Apocalipsis{

        public name:string;
        static instance: Apocalipsis;

        private constructor( name: string){
            this.name = name
        }
        static callApocalipsis():Apocalipsis {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el unico');
            }
            return Apocalipsis.instance;
        }
        set Name( name:string){
            this.name = name
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.Name = 'soy yo'
    // const apocalipsis1 = new Apocalipsis('Soy apocalipsis 1....');
    // const apocalipsis2 = new Apocalipsis('Soy apocalipsis 2....');
    // const apocalipsis3 = new Apocalipsis('Soy apocalipsis 3....');

    console.log( apocalipsis1, apocalipsis2, apocalipsis3 );
})()