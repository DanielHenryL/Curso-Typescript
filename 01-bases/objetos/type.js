"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        power: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        power: ['Super velocidad'],
        getName() {
            return this.name;
        },
    };
})();
