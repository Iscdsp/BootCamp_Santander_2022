package ex03;

import java.util.Scanner;

public class Tabuada {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Tabuada");
        int tabuada = scan.nextInt();

        for (int i = 1; i <= 10; i++) {
            int calculo = i * tabuada;
            System.out.println(tabuada + " x " + i + " = " + calculo);

        }
    }
}
