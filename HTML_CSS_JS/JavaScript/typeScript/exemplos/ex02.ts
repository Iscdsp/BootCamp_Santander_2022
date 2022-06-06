let anyVoltou: any;

anyVoltou = 3;
anyVoltou = "3";
anyVoltou = true;

let stringTest: string = "verificar";
stringTest = anyVoltou;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = true;
unknownValor = "opa";

let stringTest2: string = "ola";
stringTest2 = "2";

if (typeof unknownValor === "string") {
  stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never {
  throw {
    error: erro,
    code: codigo,
  };
}
jogaErro("deu erro", 500);
