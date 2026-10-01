let rt = require('readline-sync')
let nota = parseFloat(rt.question(`Digite sua nota:`))

if (nota >= 7){
    console.log(`Você está aprovado!😊`);
} else
    console.log(`Você não está aprovado! 🤣`);
    