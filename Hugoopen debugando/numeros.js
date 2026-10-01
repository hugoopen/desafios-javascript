let rl = require('readline-sync')
let numero = parseFloat(rl.question(`Digite o valor: `))

if (numero >0){
    console.log(`É um número positivo`);
}
else if (numero <0){
    console.log(`Este número é negativo`);
}
else if (numero ==0){
    console.log(`Este número é igual a zero`);
}else 
    console.log(`Digite o número corretamente`);
    