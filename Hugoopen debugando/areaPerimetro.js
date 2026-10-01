let rl = require('readline-sync')
let base = parseFloat(rl.question(`Digite a base, por favor: `).replace(",", "."))
let altura = parseFloat(rl.question(`Digite a altura desejada: `).replace(",", "."))
let area = base*altura
let perimetro = (base*2)+(altura*2)

console.log(`Sua área é: ${area}, e seu perímetro é: ${perimetro}`);