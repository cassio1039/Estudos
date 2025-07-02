
let num = Number(window.document.querySelector("input#numero").value);
let res = window.document.querySelector("div#res");
let analise = window.document.querySelector("select#analise");
let numeros = [];

function adicionar(){
    let n = (Number(num.value));
    if (numero.value.length == 0) {
        window.alert("[ERRO] Preencher o campo vazio.")
    } else {
        if( n < 1 || n > 100 ){
            window.alert("Digite um número entre 1 e 100")
        } else {
            numeros.push(n);
            let item = document.createElement("option");
            analise.appendChild(item);
            item.text = `O valor ${n} foi adicionado.`;
        }
    }
    
    

}
            