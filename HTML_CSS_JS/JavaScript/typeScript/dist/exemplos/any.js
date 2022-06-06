"use strict";
let valorAny;
valorAny = 3;
valorAny = "ola";
valorAny = true;
let valorString1 = "teste";
valorString1 = valorAny;
let valorString2 = "teste";
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString1, valorString2);
somarString("olá", "como vai?");
