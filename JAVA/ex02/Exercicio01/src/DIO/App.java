package DIO;

public class App {
    public static void main(String[] args) {
        Calculadora.soma(1, 2);
        Calculadora.subtracao(10, 232);
        Calculadora.Multiplicacao(12, 2020);
        Calculadora.divisao(202, 23);

        Mensagem.obterMensagem(1);
        Mensagem.obterMensagem(14);
        Mensagem.obterMensagem(7);

        Emprestimo.calcular(323, Emprestimo.getDuasParcelas());
        Emprestimo.calcular(323, Emprestimo.getTresParcelas());
        Emprestimo.calcular(323, 5);

        Quadrilatero.area(4);
        Quadrilatero.area(3d, 2d);
        Quadrilatero.area(3, 2, 4);
        Quadrilatero.area(5f, 10f);
    }

}
