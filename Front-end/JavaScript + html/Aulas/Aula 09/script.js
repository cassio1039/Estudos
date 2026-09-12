function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.querySelector("input#txtano")
    var res = window.document.querySelector("div#res")
    var img = document.getElementById("foto");
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tentenovamente");
    } else {
        var fsex = window.document.getElementsByName("sexo");
        var idade = ano - fano.value;
        var genero = "";
        if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10){
                //Criança
                img.src = "Imagens/criançaF.jpg";
            } else if ( idade >= 10 && idade < 21){
                //adolescente
                img.src = "Imagens/AdolescenteF.jpg";
            } else if ( idade >= 21 && idade < 50){
                //adulto
                img.src = "Imagens/MulherA.jpg"
            } else {
              //Idoso
              img.src = "Imagens/Idosa.jpg";
            }
        } else if (fsex[0].checked){
            genero = "Homem";
            if (idade >= 0 && idade < 10){
                //criança
                img.src = "Imagens/criançaM.jpg";
            } else if ( idade >= 10 && idade < 21){
                //adolescente
                img.src = "Imagens/AdolescenteM.jpg";
            } else if (idade >=21 && idade < 50){
                //Adulto
                img.src = "Imagens/HomemA.jpg";
            } else {
                //Idoso
                img.src = "Imagens/Idoso.jpg"
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    }

}