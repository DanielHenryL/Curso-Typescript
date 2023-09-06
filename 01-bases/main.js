"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        power: ['Super velocidad', 'Viajar en el tiempo'],
        nameReal: 'ayuida'
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
(() => {
    const client = {
        name: 'Daniel',
        age: 25,
        address: {
            id: 12334,
            city: 'lima',
            zip: 'adasdsa'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Henry',
        age: 26,
        address: {
            id: 98765,
            city: 'junin',
            zip: 'gagaga'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map