/* let employee = {};
employee.code = 10;
employee.name = "John"; */

const funcionario = {
  codigo: 22,
  nome: "José",
};

// Resposta 2
const funcionario2: { codigo: number; nome: string } = {
  codigo: 22,
  nome: "José",
};

// Respostas 3 e 4
interface Funcionario {
  codigo: number;
  nome: string;
}

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 32;
funcionarioObj.nome = "Maria";

const funcionarioObj2: Funcionario = {
  codigo: 32,
  nome: "Maria",
};
