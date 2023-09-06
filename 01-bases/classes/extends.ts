(()=>{
    class Avenger {
        constructor( public name: string, public realName:string){
            console.log( 'Constructor llamado' );
        }
        // protected te permite acceder a sus metodos y propiedades de la clase desde la clase que lo extiende,
        // private solo puedes usar usar metodos y propiedade en su propia clase, más no en una extendida.
        protected getFullname(){
            return `${ this.name } ${ this.realName }`
        }

    }

    
    class Xmen extends Avenger{
        constructor( name:string, realName:string, public isMutant:boolean ){
            super( name, realName);
            console.log( 'Constructor xmen' );
        }
        // devolver el valor
        get fullName(){
            return `${ this.name } ${ this.realName }`
        }

        // establecer el valor y aplicar logica de programacion
        set fullName( name: string ){
            if ( name.length <= 5) {
                throw new Error('El nombre de be contener más de 5 letras')
            }
            this.name = name;
        }

        getFullnameDesdeXmen(){
            console.log( super.getFullname() );
        }

    }

    // const wolveri = new Xmen('Wolveri', 'Logan', true);
    // wolveri.fullName = 'Danie'
    // console.log( wolveri.fullName );

})()