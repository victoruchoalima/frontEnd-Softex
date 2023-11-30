try {
  let numero1 = parseFloat(prompt("Insira o primeiro número:"));
  let numero2 = parseFloat(prompt("Insira o segundo número:"));
  let resultado;

  if (numero2 === 0) {
    throw new Error("Não é possível a divisão por zero");
  } else {
    resultado = numero1 / numero2;
  }

  console.log(`Resultado: ${resultado}`);
} catch (error) {
  console.error(`Erro: ${error.message}`);
} finally {
  console.log("Fim da execução.");
}
