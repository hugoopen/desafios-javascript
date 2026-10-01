let rl = require('readline-sync')
let nome = rl.question(`Digite o seu nome, por favor: `)
let idade = parseInt(rl.question(`Digite a sua idade, por favor: `))
let cidade = rl.question(`Digite o nome da sua cidade, por favor: `)
console.log(`Esses são os seus dados: ${nome}${idade}${cidade}`);
