"use strict";
(() => {
    // mandar un argumento por defecto 'upper = false'
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.trim().toUpperCase();
        }
        return `${firstName} ${lastName || ''}`.trim();
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
