function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.querySelector("input#ano-idade");
    var res = window.document.querySelector("div#res");
    if (fano.value.length == 0 || fano.value> ano){
        window.alert("Erro! Verifique os dados e digite novamente.")
    } else {
        var fsex = window.document.getElementsByName("sexo");
        var idade = ano - fano.value;
        var genero = "";
        var frase = "";
        var img = window.document.getElementById("foto");
        if (fsex[0].checked) {
            genero="Homem";
            if (idade >=0 && idade <10){
                img.src = "Imagens/criançaM.jpg";
                frase = "ele é uma criança." 
            } else if (idade >= 10 && idade < 21){
                img.src = "Imagens/AdolescenteM.jpg";
                frase = "ele é um adolescente."
            } else if (idade >= 21 && idade < 50){
                img.src = "Imagens/HomemA.jpg";
                frase = "ele é um homem."
            } else {
                img.src = "Imagens/Idoso.jpg";
                frase = "ele é um idoso.";
            }
        } else {
            genero = "Mulher"
            if (idade >=0 && idade <10){
                img.src = "Imagens/criançaF.jpg";
                frase = "ela é uma criança." 
            } else if (idade >= 10 && idade < 21){
                img.src = "Imagens/AdolescenteF.jpg";
                frase = "ela é uma adolescente."
            } else if (idade >= 21 && idade < 50){
                img.src = "Imagens/MulherA.jpg";
                frase = "ela é uma mulher."
            } else {
                img.src = "Imagens/Idosa.jpg";
                frase = "ela é um idosa.";
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos e ${frase}`
    }
    
}