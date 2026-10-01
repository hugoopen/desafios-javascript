let rl = require('readline-sync')

let x = parseInt(rl.question('Inserir valor de x: '))
let y = parseInt(rl.question('Inserir valor de y: '))

if (x % y == 0){
    console.log('X é Divisivel por Y !!');
    
}else{
    console.log('X não é Divisivel por Y :(');    
}

