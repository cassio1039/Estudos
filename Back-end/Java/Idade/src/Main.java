import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite sua idade: ");
        int idade = scanner.nextInt();
        if ( idade <= 12){
            System.out.println("Ele é uma criança de " + idade + " anos.");
        } else if ( idade <= 17 ){
            System.out.println("Ele é um adolescente.");
        } else {
            System.out.println("Ele é um adulto.");
        }
    }
}