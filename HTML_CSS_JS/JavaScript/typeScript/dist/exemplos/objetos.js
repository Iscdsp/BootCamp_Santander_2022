"use strict";
const pessoa = {
    nome: "Caio",
    idade: 30,
    profissao: "Desenvolvedor",
};
pessoa.idade = 25;
//-------------------------------------------------
const andre = {
    nome: "André",
    idade: 30,
    profissao: "pintor",
};
//---------------------------------------------------
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const Vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const Maria = {
    nome: "Fernanda",
    idade: 33,
    materias: ["Geografia", "Ciências contábeis"],
};
const Jessica = {
    nome: "Jéssica",
    idade: 22,
    profissao: Profissao.JogadoraDeFutebol,
    materias: ["matemática", "programação"],
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(Maria.materias);
