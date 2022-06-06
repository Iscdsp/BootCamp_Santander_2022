/* function SomarNumeros(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

console.log(SomarNumeros(20, 12));

function printaValoresNum(numero1: number, numero2: number):void {
    console.log(numero1+numero2)
} */

function printaValoresNum(
  numero1: number,
  numero2: number,
  callback: (numero: number) => number
): number {
  let resultado = numero1 + numero2;

  return callback(resultado);
}

function aoQuadrado(numero: number): number {
  return numero * numero;
}

function divPorEleMesmo(numero: number): number {
  return numero / numero;
}
console.log(printaValoresNum(1, 3, divPorEleMesmo));
console.log(printaValoresNum(1, 3, aoQuadrado));
