function contar(){
    var inicio = document.querySelector("input#inicio");
    var fim = document.querySelector("input#fim");
    var passo = document.querySelector("input#passo");
    var res = document.querySelector("div#res");
    
    
    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        window.alert(`[ERRO] checagem inválida.`);

     } else {
        res.innerHTML = "Contando: ";
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if ( inicio.value < fim.value) {
            for (c = i; c <= f; c += p){
                res.innerHTML += `${c} `;
            }
        } else {
            for (c = i; c >= f; c -= p){
                res.innerHTML += `${c} `;
            }
        }
    }
}
