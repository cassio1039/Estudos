function verificar(){
    let numero = document.querySelector("input#numero");
    let res = document.querySelector("div#res");
    if (numero.value == 0){
        window.alert("[ERRO] Preencha o campo vazio.")
    } else {
        let n = Number(numero.value)
        if (n % 2 == 0){
            res.innerHTML = `O número ${n} é par.`
        } else {
            res.innerHTML = `O número ${n} é impar.`
        }
    }
}