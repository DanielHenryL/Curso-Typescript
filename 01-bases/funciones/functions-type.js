"use strict";
(() => {
    const addNumbers = (a, b) => {
        return a + b;
    };
    const greet = (name) => {
        return `Hola ${name}`;
    };
    const saveTheWorld = () => {
        return `El mundo esta salvado`;
    };
    let myFunction;
    //* myFunction = 10;
    //* console.log( myFunction );
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Daniel'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
