// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:batimovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

interface batimovil {
  encender:boolean,
  velocidadMaxima:number,
  acelear():void
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason{
  reir:boolean,
  comer?:boolean,
  llorar?:boolean
}


const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface Lugar{
  (valor:string[]):number
}
const ciudadGotica:Lugar = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Humano{
  name:string,
  age:number,
  sexo:string,
  estadoCivil:string,
  imprimirBio():void
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Humano{
    public name: string;
    public age: number;
    public sexo: string;
    public estadoCivil: string;

    public imprimirBio(): void {
      console.log( this.name );
    }
}