const banco = {
  conta: "111.12",
  saldo: 20,
  tipoConta: "Conta-corrente",
  agencia: "6666",

  buscarSaldo: function () {
    console.log(`Seu saldo é: R$${this.saldo} reais`);
    return this.saldo;
  },

  deposito: function (valor) {
    this.saldo += valor;
  },

  saque: function (valor) {
    this.saldo -= valor;
  },

  numeroConta: function () {
    console.log(`O número da sua conta é: ${this.conta}`);
    return this.conta;
  },
};
