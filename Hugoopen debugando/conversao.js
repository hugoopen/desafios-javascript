let rl = require('readline-sync')
let temperatura = parseFloat(rl.question(`Digite a temperatura em Celsius para a conversão:` ).replace(",", "."))
let Fahrenheit = temperatura * 1.8 + 32
console.log(`A conversão de temperatura para Fahrenheit, é: ${Fahrenheit.toFixed(2)}`);
let Celsius =  (temperatura- 32) / 1.8
console.log(`A conversão de temperatura para Celcius, é: ${Celsius.toFixed(2)}`);

