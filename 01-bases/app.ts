(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[ string, string ] = [batman,superman];
    const villano:[ string, number, boolean ] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum power{
      fAcuaman, // por defecto sera 0 
      fBatman, // seguira el orden desde el anterior, entonces sera 1
      fFlash = 5,
      fSuperman = 100
    }
    const fuerzaFlash:power = power.fFlash;
    const fuerzaSuperman:power = power.fBatman;
    const fuerzaBatman:power = power.fFlash;
    const fuerzaAcuaman:power = power.fSuperman;
  
    // Retorno de funciones
    function activar_batiseñal():string {
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = ( poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  