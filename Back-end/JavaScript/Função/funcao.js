/* 
eval = pega uma string e interpreta ela
Para chamar uma função anônima, coloque-se parentêses antes da função e também assim que terminar ela 
*/

function calcular(x1, x2, operador) {
  return eval(`${x1} ${operador} ${x2}`);
}
let resultado = calcular(1, 2, "*");
console.log(resultado);

console.log(
  (function calcular(x1, x2, operador) {
    return eval(`${x1} ${operador} ${x2}`);
  })(5, 5, "*")
);

//Arrow function é uma shorthand que se escreve uma função em uma única linha.

let calcular = (x1,x2,operador) => {
    return eval(`${x1} ${operador} ${x2}`);
};
