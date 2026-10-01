let rl = require('readline-sync')
let idade = parseInt(rl.question(`Digite sua idade: `)) 

if (idade > 0 && idade < 13){
    console.log(`Você ainda é criança.`)
}   else if(idade>=13 && idade <18){
    console.log(`Você ainda é adolescente`);
} else if(idade>=18 && idade < 60){
    console.log(`Você ainda é adulto`);
}else if (idade >=60){
    console.log(`Você é velho`);
}else{
    console.log(`Digite a sua idade corretamente`);
}
