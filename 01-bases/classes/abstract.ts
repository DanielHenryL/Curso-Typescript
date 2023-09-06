(()=>{
    abstract class Mutante{
        constructor( public name:string, public realName:string ){
            
        }
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo a salvo'
        }
    }

    class Villian  extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado'
        }
    }

    const wolveri = new Xmen('Wolveri','Logan');
    const magneto = new Villian('Magneto','Magnus');
    // console.log( wolveri.salvarMundo() );
    // console.log( magneto.conquistarMundo() );

    const prinName = ( character: Mutante ) => {
        console.log( character.name );
    }

    prinName( wolveri );
})()