(() => {
    const addNumbers = ( a:number,b:number ):number => {
        return a + b; 
    }
    const greet = ( name: string ):string => {
        return `Hola ${ name }`; 
    }
    const saveTheWorld = ( ) => {
        return `El mundo esta salvado`; 
    }

    let myFunction:Function;

    //* myFunction = 10;
    //* console.log( myFunction );

    myFunction = addNumbers
    console.log( myFunction( 1, 2 ) );

    myFunction = greet
    console.log( myFunction('Daniel') ); 

    myFunction = saveTheWorld
    console.log( myFunction() );
})()