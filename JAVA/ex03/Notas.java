package ex03;

import java.util.Scanner;

public class Notas {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int nota;

        nota = scan.nextInt();
        System.out.println("Nota: " + nota);

        while (nota < 0 | nota > 10) {
            System.out.println("Nota inválida!! Digite novamente ");
            nota = scan.nextInt();
        }
    }
}
