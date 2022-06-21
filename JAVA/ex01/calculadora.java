package ex01;
/*
1 - visibilidade
2 - modificador
3 - retorno
4 - nome do método
5 - parâmetros
*/



public class calculadora {
//    1       2     3    4  [--------------5--------------]                
    public static void soma(double numero1, double numero2) {
        double resultado = numero1 + numero2;

        System.out.println(" A soma de " + numero1 + " mais " + numero2 + " é: " + resultado);
    };
    
    public static void subtracao(double numero1, double numero2) {
        double resultado = numero1 - numero2;

        System.out.println("A subtração de " + numero1 + "menos" + numero2 + " é: " + resultado);
    };

    public static void multiplicacao(double numero1, double numero2) {
        double resultado = numero1 * numero2;

        System.out.println("A multiplicação de " + numero1 + "vezes" + numero2 + " é: " + resultado);
    };

    public static void divisao( double numero1, double numero2){
        double resultado = numero1 / numero2;

        System.out.println("A divisão  de "+ numero1+ "dividido por "+numero2+"é: "+resultado);
    }

}
