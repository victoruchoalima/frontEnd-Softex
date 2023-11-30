// função tradicional com palavra reservada function e nenhum parametro

function saudacao() {
  console.log("olá, bem vindo a calculadora básica");
}

//função tradicional com parametro e retorno de valor

function soma(a, b) {
  return a + b;
}

//função com arrow function e parametros
const multiplicacao = (a, b) => a * b;

//programa

saudacao();
let num1 = parseFloat(prompt("primeiro numero:"));
let num2 = parseFloat(prompt("segundo numero:"));

console.log(`a soma dos números é: ${soma(num1, num2)}`);
console.log(`O produto dos números é: ${multiplicacao(num1, num2)}`);
