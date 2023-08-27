"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let power;
    (function (power) {
        power[power["fAcuaman"] = 0] = "fAcuaman";
        power[power["fBatman"] = 1] = "fBatman";
        power[power["fFlash"] = 5] = "fFlash";
        power[power["fSuperman"] = 100] = "fSuperman";
    })(power || (power = {}));
    const fuerzaFlash = power.fFlash;
    const fuerzaSuperman = power.fBatman;
    const fuerzaBatman = power.fFlash;
    const fuerzaAcuaman = power.fSuperman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
