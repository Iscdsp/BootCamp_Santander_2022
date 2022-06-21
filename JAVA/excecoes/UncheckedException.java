package excecoes;

import javax.swing.JOptionPane;

public class UncheckedException {
    public static void main(String[] args) {
        boolean continuelooping = true;
        do {
            String a = JOptionPane.showInputDialog("Numerador: ");
            String b = JOptionPane.showInputDialog("Denominador: ");
            try {

                int resultado = dividir(Integer.parseInt(a), Integer.parseInt(b));
                System.out.println("Resultado: " + resultado);
                continuelooping = false;
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null,
                        "Entrada inválida, informe um número inteiro! erro no sistema: " + e.getMessage());
            } catch (ArithmeticException e) {

                JOptionPane.showMessageDialog(null,
                        "Impossível dividir um número por zero! erro no sistema: " + e.getMessage());
            } finally {
                System.out.println("Ocorreu um erro mas...");
            }
        } while (continuelooping);

        System.out.println("o código continua aqui...");
    }

    public static int dividir(int a, int b) {
        return a / b;
    }
}
