import java.util.List;
import java.util.Scanner;

public class Main {

    private static final Scanner scanner = new Scanner(System.in);
    private static final GerenciadorTarefas gerenciador = new GerenciadorTarefas();

    public static void main(String[] args) {
        boolean rodando = true;

        while (rodando) {
            exibirMenu();
            String opcao = scanner.nextLine().trim();

            switch (opcao) {
                case "1":
                    adicionarTarefa();
                    break;
                case "2":
                    listarTarefas(gerenciador.listarTodas());
                    break;
                case "3":
                    listarTarefas(gerenciador.listarPendentes());
                    break;
                case "4":
                    concluirTarefa();
                    break;
                case "5":
                    removerTarefa();
                    break;
                case "6":
                    listarTarefas(gerenciador.listarOrdenadasPorPrioridade());
                    break;
                case "0":
                    rodando = false;
                    System.out.println("Até mais!");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }

        scanner.close();
    }

    private static void exibirMenu() {
        System.out.println("\n===== GERENCIADOR DE TAREFAS =====");
        System.out.println("Total de tarefas: " + gerenciador.total());
        System.out.println("1 - Adicionar tarefa");
        System.out.println("2 - Listar todas as tarefas");
        System.out.println("3 - Listar tarefas pendentes");
        System.out.println("4 - Concluir tarefa");
        System.out.println("5 - Remover tarefa");
        System.out.println("6 - Listar por prioridade (maior primeiro)");
        System.out.println("0 - Sair");
        System.out.print("Escolha uma opção: ");
    }

    private static void adicionarTarefa() {
        System.out.print("Título: ");
        String titulo = scanner.nextLine();

        System.out.print("Descrição: ");
        String descricao = scanner.nextLine();

        Prioridade prioridade = escolherPrioridade();

        Tarefa tarefa = gerenciador.adicionarTarefa(titulo, descricao, prioridade);
        System.out.println("Tarefa criada: " + tarefa);
    }

    private static Prioridade escolherPrioridade() {
        System.out.println("Prioridade: 1-BAIXA  2-MEDIA  3-ALTA");
        System.out.print("Escolha: ");
        String escolha = scanner.nextLine().trim();

        switch (escolha) {
            case "1":
                return Prioridade.BAIXA;
            case "3":
                return Prioridade.ALTA;
            default:
                return Prioridade.MEDIA;
        }
    }

    private static void listarTarefas(List<Tarefa> tarefas) {
        if (tarefas.isEmpty()) {
            System.out.println("Nenhuma tarefa encontrada.");
            return;
        }
        for (Tarefa tarefa : tarefas) {
            System.out.println(tarefa);
        }
    }

    private static void concluirTarefa() {
        System.out.print("Digite o ID da tarefa a concluir: ");
        int id = lerInteiro();
        boolean sucesso = gerenciador.concluirTarefa(id);
        System.out.println(sucesso ? "Tarefa concluída!" : "ID não encontrado.");
    }

    private static void removerTarefa() {
        System.out.print("Digite o ID da tarefa a remover: ");
        int id = lerInteiro();
        boolean sucesso = gerenciador.removerTarefa(id);
        System.out.println(sucesso ? "Tarefa removida!" : "ID não encontrado.");
    }

    private static int lerInteiro() {
        try {
            return Integer.parseInt(scanner.nextLine().trim());
        } catch (NumberFormatException e) {
            System.out.println("Valor inválido, considerando -1.");
            return -1;
        }
    }
}
