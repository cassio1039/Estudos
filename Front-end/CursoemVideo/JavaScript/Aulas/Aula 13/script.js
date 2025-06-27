function gerar(){
    
    numero = document.querySelector("input#numero");
    res = document.querySelector("div#res");
    tabuada = document.querySelector("select#tabuada");
    if (numero.value.length == 0){
        window.alert("Escolha um número e tente novamente.")
    } else {
        n = Number(numero.value)
        if (n == 0){
            res.innerHTML = "[ERRO] Qualquer número multiplicado por 0, dá ele mesmo!"
        } else {
            tabuada.innerHTML=""
            for (var c=1; c<=10; c++){
                var item = document.createElement("option");
                item.text = `${n} x ${c} = ${n * c}`;
                tabuada.appendChild(item);
                res.innerHTML = `A tabuada mostrada é de número ${n}.`
            }
        }
    }
}