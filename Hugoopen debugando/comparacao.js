let rl = require('readline-sync')
let valor = parseFloat(rl.question(`Digite o 1º dígito:`).replace(",", "."))
let valor1 = parseFloat(rl.question(`Digite o 2º dígito:`).replace(",", "."))

if(valor > valor1){
    console.log(`O primeiro dígito é maior que o segundo! 😁`);
} else if (valor < valor1){
    console.log(`O segundo dígito é maior que o primeiro!`)
} else if (valor === valor1){
    console.log(`Os 2 dígitos são iguais! ✌️`);
}else
    console.log(`Digite um valor númerico, por favor! \n😠`);
    