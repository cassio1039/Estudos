import java.util.Scanner;

public class Main {
    static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);
        System.out.println("Insira quantos produtos você quer: ");
        int produto = scanner.nextInt();
        System.out.println("Qual o preço do produto?");
        double preco = scanner.nextFloat();
        double total = produto * preco;
        System.out.println("O valor total a pagar do produto é " + String.format("%.2f", total));
    }
}
