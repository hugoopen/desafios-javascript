let rl = require('readline-sync')
let peso = parseFloat(rl.question(`Digite o seu peso, por favor: `).replace(",", "."))
let altura = parseFloat(rl.question(`Digite sua altura, por favor: `).replace(",", "."))
let resultadodoIMC = peso/(altura*altura)
console.log(`Seu IMC é: ${resultadodoIMC.toFixed(2)}`);
