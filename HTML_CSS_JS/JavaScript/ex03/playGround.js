//---------método Map------------------

const maca = {
  value: 2,
};

const laranja = {
  value: 3,
};

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const num = [1, 2];

console.log(mapComThis(num, maca));
console.log(mapComThis(num, laranja));

// -----------------------------------

function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

//-----------Uso do filter----------------

function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 !== 0;
}

const ArrayQualquer = [1, 34, 23, 54, 2, 45, 67];

console.log(filtraPares(ArrayQualquer));

//------------uso do Reduce -------------------

function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    return prev + current;
  });
}

const arr = [1, 2];

console.log(somaNumeros(arr));

//------------------------------------------------

const lista = [
  { name: "sabao em po", preco: 30 },
  { name: "cereal", preco: 12 },
  { name: "toalha", preco: 36 },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current) {
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
