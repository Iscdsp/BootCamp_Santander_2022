import javax.sound.midi.Soundbank;

public class OrdemInversa {
    public static void main(String[] args) {

        int[] vetor = { 223, 19, -12, 45, 99, 123 };

        int count = 0;
        System.out.println("vetor: ");
        while (count < (vetor.length)) {
            System.out.print(vetor[count] + ",");
            count++;
        }
        System.out.println("\nvetor: ");
        for (int i = (vetor.length - 1); i >= 0; i--) {
            System.out.print(vetor[i] + ",");
        }
    }
}
