let numeros = [];
function adicionar(){
    num = window.document.querySelector("input#numero");
    res = window.document.querySelector("div#res");
    analise = window.document.querySelector("select#analise");
    numeros.push(Number(num.value));
    if (num.value.length == 0){
        window.alert ("[ERRO] Preencha os dados.")
    } else {
        for (n=0 ; n < numeros.length; n++) {
            
            var item = document.createElement("option");
            analise.appendChild(item);
            item.text = `O número ${numeros} foi adicionado.`;
            
            
        
        }
        
    }
}