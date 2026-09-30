public class Tarefa {

    private static int proximoId = 1;

    private final int id;
    private String titulo;
    private String descricao;
    private Prioridade prioridade;
    private boolean concluida;

    public Tarefa(String titulo, String descricao, Prioridade prioridade) {
        this.id = proximoId++;
        this.titulo = titulo;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.concluida = false;
    }

    public int getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Prioridade getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(Prioridade prioridade) {
        this.prioridade = prioridade;
    }

    public boolean isConcluida() {
        return concluida;
    }

    public void concluir() {
        this.concluida = true;
    }

    @Override
    public String toString() {
        String status = concluida ? "[X]" : "[ ]";
        return String.format("%s #%d [%s] %s - %s",
                status, id, prioridade, titulo, descricao);
    }
}
