// un namesspaces seria como un agrupador de logica o metodos en donde solo exportamos lo que necesitamos
// 
namespace Validations{
    export const validateText = ( text:string ):boolean => {
        return ( text.length > 3 ) ? true: false;
    }    

    export const validateDate = ( myDate:Date ):boolean => {
        return ( isNaN( myDate.valueOf() )) ? false: true;
    }
}

console.log( Validations.validateText('dani') );