var agora = new Date();
var diaSem = agora.getDay();
var day = "";

switch (diaSem) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Segunda";
    break;
  case 2:
    day = "Terça";
    break;
  case 3:
    day = "Quarta-feira";
    break;;
  case 4:
    day = "Quinta";
    break;
  case 5:
    day = "Sexta";
    break;
  case 6:
    day = "Sábado";
    break;
}
console.log(`Hoje é ${day}.`)

