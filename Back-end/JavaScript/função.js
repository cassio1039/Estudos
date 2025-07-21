function calcular(x1, x2, operador) {
  return eval(`${x1} ${operador} ${x2}`);
}
let resultado = calcular(1, 2, "*");
console.log(resultado);

(function calcular(x1, x2, operador) {
  return eval(`${x1} ${operador} ${x2}`);
})(5,5, "*")

console.log();

/* 
eval = pega uma string e interpreta ela
Para chamar uma função anônima, coloque-se parentêses antes da função e também assim que terminar ela 
*/



