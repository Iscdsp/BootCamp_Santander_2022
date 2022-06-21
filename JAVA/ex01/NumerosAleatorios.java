package ex01;

import java.util.Random;

public class NumerosAleatorios {
    public static void main(String[] args) {
        Random random = new Random();
        int[] numeros = new int[20];
        for (int i = 0; i < numeros.length; i++) {
            int numero = random.nextInt(100);
            numeros[i] = numero;
        }
        System.out.print("Numeros aleatórios\n");
        for (int numero : numeros) {
            System.out.println(numero + " ");
        }
        System.out.print("Sucessores dos num. aleatórios\n");
        for (int numero : numeros) {
            System.out.println((numero + 1) + " ");
        }
        System.out.print("Antecessores dos num. aleatórios\n");
        for (int numero : numeros) {
            System.out.println((numero - 1) + " ");
        }
    }
}
