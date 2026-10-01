let rl = require('readline-sync')
let idade = parseInt(rl.question(`Digite a sua idade, por favor: `))

if(idade >= 18){
    console.log(`Você é maior de idade! =)`);
} else{
    console.log(`Você é de menor de idade.`)
}
