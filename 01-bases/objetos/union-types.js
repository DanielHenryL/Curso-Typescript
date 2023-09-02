"use strict";
(() => {
    let myCustomVariable = 'Daniel';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Daniel',
        age: 26,
        power: ['estudioso', 'bueno'],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
