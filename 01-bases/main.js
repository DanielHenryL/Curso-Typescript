"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avenger = {
        nick: 'Samuel ha',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 100.25345
    };
    const printAvenger = (_a) => {
        var { poder } = _a, resto = __rest(_a, ["poder"]);
        console.log(poder, resto.nick);
    };
    const avengerArr = ['capitan america', true, 123.4561];
    const [capitan, ironman, poder] = avengerArr;
})();
(() => {
    const ironman = {
        name: 'tony',
        weapon: 'Armorsuit'
    };
    const capAmerican = {
        name: 'Capitan America',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, capAmerican, thor];
    for (const avenger of avengers) {
        console.log({ nombre: avenger.name, arma: avenger.weapon });
    }
})();
(() => {
    const nombre = 'Fernando';
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map