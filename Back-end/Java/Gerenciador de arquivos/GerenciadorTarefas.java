import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class GerenciadorTarefas {

    private final List<Tarefa> tarefas;

    public GerenciadorTarefas() {
        this.tarefas = new ArrayList<>();
    }

    public Tarefa adicionarTarefa(String titulo, String descricao, Prioridade prioridade) {
        Tarefa novaTarefa = new Tarefa(titulo, descricao, prioridade);
        tarefas.add(novaTarefa);
        return novaTarefa;
    }

    public boolean removerTarefa(int id) {
        return tarefas.removeIf(t -> t.getId() == id);
    }

    public boolean concluirTarefa(int id) {
        for (Tarefa tarefa : tarefas) {
            if (tarefa.getId() == id) {
                tarefa.concluir();
                return true;
            }
        }
        return false;
    }

    public List<Tarefa> listarTodas() {
        return new ArrayList<>(tarefas);
    }

    public List<Tarefa> listarPendentes() {
        List<Tarefa> pendentes = new ArrayList<>();
        for (Tarefa tarefa : tarefas) {
            if (!tarefa.isConcluida()) {
                pendentes.add(tarefa);
            }
        }
        return pendentes;
    }

    public List<Tarefa> listarPorPrioridade(Prioridade prioridade) {
        List<Tarefa> resultado = new ArrayList<>();
        for (Tarefa tarefa : tarefas) {
            if (tarefa.getPrioridade() == prioridade) {
                resultado.add(tarefa);
            }
        }
        return resultado;
    }

    public List<Tarefa> listarOrdenadasPorPrioridade() {
        List<Tarefa> copia = new ArrayList<>(tarefas);
        copia.sort(Comparator.comparing(Tarefa::getPrioridade).reversed());
        return copia;
    }

    public int total() {
        return tarefas.size();
    }
}
