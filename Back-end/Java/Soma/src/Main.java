import java.util.Scanner;

public class Main {
    public static void main() {
        Scanner scanner = new Scanner(System.in);
        int total = 0;
        System.out.println("Digite um número: ");
        int numero = scanner.nextInt();
        while ( numero != 0 ){
            total = total + numero;
            System.out.println("Digite um número: ");
            numero = scanner.nextInt();
        }
        System.out.println("A soma de todos os números é: " + total + ".");
    }
}