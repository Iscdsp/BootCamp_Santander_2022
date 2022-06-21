package ex03;

import java.util.Scanner;

public class ParEImpar {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int qntNumeros;
        System.out.println("quantidade de números: ");
        qntNumeros = scan.nextInt();

        int count = 0;
        int numero;
        int qntPares = 0, qntImpares = 0;

        do {
            System.out.println("Número: ");
            numero = scan.nextInt();
            count++;

            if (numero % 2 == 0)
                qntPares++;
            else
                qntImpares++;
        } while (count < qntNumeros);
        System.out.println("Quantidade Pares:" + qntPares);
        System.out.println("Quantidade Impares: " + qntImpares);
    }
}
