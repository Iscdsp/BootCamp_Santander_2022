let button = document.querySelector("#button");
let input1 = document.querySelector("#input1") as HTMLInputElement;
let input2 = document.querySelector("#input2") as HTMLInputElement;

function adicionarNumero(
  numero1: number,
  numero2: number,
  devePrintar: boolean,
  frase: string
) {
  let resultado = numero1 + numero2;
  if (devePrintar) {
    console.log(frase + resultado);
  }
  return console.log(frase + resultado);
}
let devePrintar = true;
let frase: string;
frase = "O valor é: ";

if (button) {
  button.addEventListener("click", () => {
    if (input1 && input2) {
      adicionarNumero(
        Number(input1.value),
        Number(input2.value),
        devePrintar,
        frase
      );
    }
  });
}
