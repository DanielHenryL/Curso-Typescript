"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        power: ['Super velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'daniel',
        age: 26,
        power: ['super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
