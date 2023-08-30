"use strict";
(() => {
    // argumento opcional 'lastName?: strign'
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`.trim();
    };
    const name = fullName('Tony   ');
    console.log({ name: name });
})();
