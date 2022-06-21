package ex03;

import java.util.Scanner;

public class Fatorial {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int fatorial = scan.nextInt();
        System.out.println(fatorial + "!=");

        int multiplicacao = 1;
        System.out.println("fatorial " + "!=");
        for (int i = fatorial; i >= 1; i--) {
            multiplicacao *= i;
        }
        System.out.println(multiplicacao);
    }
}
