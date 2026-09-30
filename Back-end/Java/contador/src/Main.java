import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite um número: ");
        int numero = scanner.nextInt();
        for (int i = numero; i <= 20; i++){
            if (i % 3 == 0){
                continue;
            } else {
                System.out.println(i);
            }
        }
    }
}