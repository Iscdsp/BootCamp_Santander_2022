"use strict";
let anyVoltou;
anyVoltou = 3;
anyVoltou = "3";
anyVoltou = true;
let stringTest = "verificar";
stringTest = anyVoltou;
let unknownValor;
unknownValor = 3;
unknownValor = true;
unknownValor = "opa";
let stringTest2 = "ola";
stringTest2 = "2";
if (typeof unknownValor === "string") {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw {
        error: erro,
        code: codigo,
    };
}
jogaErro("deu erro", 500);
