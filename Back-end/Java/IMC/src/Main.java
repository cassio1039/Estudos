import java.util.Scanner;

public class Main {
    static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite sua altura:");
        double altura = scanner.nextDouble();
        System.out.println("Digite seu peso:");
        double peso = scanner.nextFloat();
        double resultado = peso / (altura * altura);
        System.out.println("Sua altura é " + String.format("%.2f", altura)+ ", seu peso é " + String.format("%.2f", peso) +
                " e seu imc é " + String.format("%.2f", resultado));
        scanner.close();
    }
}
