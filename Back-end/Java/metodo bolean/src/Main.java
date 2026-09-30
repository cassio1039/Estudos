import java.util.Scanner;

public class Main {
    static boolean ehPar(int numero){
        return numero % 2 ==0;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite um número: ");
        int numero = scanner.nextInt();
        boolean resultado = ehPar(numero);
        System.out.println(resultado);
    }
}