let num = [5,8,2,9,3]; // CRIAÇÃO DE VETORES EM JS
num[5]=7;
num.sort()
num.push(6);
/*
console.log(`Qual o tamanho do nosso vetor?`)
console.log(`O tamanho do nosso vetor é: ${num.length}.`)
console.log("Quantos valores existem dentro da variável primária?")
console.log(`Dentro da variável primária existem ${num[0]} valores`)
console.log("Quantas variáveis foram inseridas?")
console.log(`Foram inseridas ${num[2]} variáveis.`)
console.log("Quais foram as variáveis inseridas?")
console.log(`As variáveis inseridas foram ${num[5]} e ${num[6]}`)
console.log(`Mostre em ordem os vetores: ${num.sort()}.`)
*/

for (let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 


 