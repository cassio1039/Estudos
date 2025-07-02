var agora = new Date();
var hora = agora.getMinutes();
if (hora < 12) {
  res = "manhã";
} else if (hora >= 12 && hora <= 18) {
  res = "tarde";
} else {
  res = "noite";
}
console.log(`Agora são exatamente ${hora} horas da ${res}.`);
console.log(`Tenha uma excelente ${res}!`)
