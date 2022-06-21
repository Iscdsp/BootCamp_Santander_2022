package ex03;

import java.util.Scanner;

public class MaiorMenor {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int numero;

        int maior = 0;
        int soma = 0;
        int count = 0;
        do {
            System.out.println("Numero: ");
            numero = scan.nextInt();
            count += 1;
            soma += numero;
            if (numero > maior)
                maior = numero;
        } while (count < 5);
        System.out.println("Maior número: " + maior + "!");
        System.out.println("A média é: " + soma / 5);

    }
}
