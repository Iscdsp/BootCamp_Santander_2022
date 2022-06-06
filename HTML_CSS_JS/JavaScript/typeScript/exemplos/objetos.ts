const pessoa = {
  nome: "Caio",
  idade: 30,
  profissao: "Desenvolvedor",
};

pessoa.idade = 25;

//-------------------------------------------------

const andre: { nome: string; idade: number; profissao: string } = {
  nome: "André",
  idade: 30,
  profissao: "pintor",
};

//---------------------------------------------------

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}
interface estudante extends Pessoa {
  materias: string[];
}

const Vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};
const Maria: estudante = {
  nome: "Fernanda",
  idade: 33,
  materias: ["Geografia", "Ciências contábeis"],
};

const Jessica: estudante = {
  nome: "Jéssica",
  idade: 22,
  profissao: Profissao.JogadoraDeFutebol,
  materias: ["matemática", "programação"],
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item);
  }
}

listar(Maria.materias);
