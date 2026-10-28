//pedir informações ao usuários
//pedir informação ao usuário sobre qual operação será escolhida pelo usuário
//retorne o resultado
//ter estrutura de repetição e trabalhar com verificações

const { question, questionInt } = require("readline-sync");

const soma = (inserirNumero, inserirSegundoNumero) => {
  return inserirNumero + inserirSegundoNumero;
};
const subtracao = (inserirNumero, inserirSegundoNumero) => {
  return inserirNumero - inserirSegundoNumero;
};
const multiplicacao = (inserirNumero, inserirSegundoNumero) => {
  return inserirNumero * inserirSegundoNumero;
};
const divisao = (inserirNumero, inserirSegundoNumero) => {
  if (inserirSegundoNumero === 0) {
    return "O segundo numero nao pode ser 0";
  } else {
    return (inserirNumero / inserirSegundoNumero);
  }
};
let opcao;

let num1
let num2 
while (opcao !== 5) {
  console.clear();
  console.log("=====Calculadora=====");
  console.log("1 - Somar");
  console.log("2 - Subtrair");
  console.log("3 - Multiplicar");
  console.log("4 - Dividir");
  console.log("5 - Encerrar");

  opcao = parseInt(question("Escolha a operacao: "));

  switch (opcao) {
    case 1:
      num1 = questionInt("Insira o 1 numero: ");
      num2 = questionInt("Insira o 2 numero: ");
      console.log(soma(num1, num2));
      break;

    case 2:
      num1 = questionInt("Insira o 1 numero: ");
      num2 = questionInt("Insira o 2 numero: ");
      console.log(subtracao(num1, num2));
      break;

    case 3:
      num1 = questionInt("Insira o 1 numero: ");
      num2 = questionInt("Insira o 2 numero: ");
      console.log(multiplicacao(num1, num2));
      break;

    case 4:
      num1 = questionInt("Insira o 1 numero: ");
      num2 = questionInt("Insira o 2 numero: ");
      console.log(divisao(num1, num2));
      break;

    case 5:
      console.log("Encerrando o sistema!");
      break;

    default:
      console.log("Digite uma opcao de 1 a 5");
      break;
  }

  if (opcao !== 5) {
    question("Aperte enter para voltar ao menu!");
  }
}
