const livro = {
  titulo: "bestiário",
  autor: "julio cortázar",
  numeroPáginas: 350,
  paginaAtual: 1,

  ler: function (numero) {
    this.paginaAtual += numero;
  },

  paginasRestantes: function () {
    if (this.paginaAtual >= this.numeroPáginas) {
      console.log("livro finalizado.");
    } else {
      return console.log(
        `restam ${this.numeroPáginas - this.paginaAtual} páginas`
      );
    }
  },

  dadosLivro: function () {
    return { titulo: this.titulo, autor: this.autor };
  },
};

const violao = {
  marca: "Fender",
  tipo: "Nylon",
  afinaçãoAtual: ["E", "A", "D", "G", "B", "E"],

  tocarNota: function (nota) {
    console.log(`Tocando a nota ${nota}`);
  },

  afinacao: function () {
    return this.afinaçãoAtual;
  },

  dadosViolao: function () {
    return { marca: this.marca, tipo: this.tipo };
  },
};

const redeSocial = {
  nomePerfil: "casimiro",
  seguidores: 5000,
  publicacoes: ["Vasco da Gama", "Neymar", "Anna Beatriz"],

  publicar: function (conteudo) {
    this.publicacoes.push(conteudo);
    console.log(`Nova publicação: ${conteudo}`);
  },

  apagarSeguidor: function (usuarios) {
    this.seguidores -= usuarios;
  },

  dadosPerfil: function () {
    return { seguidores: this.seguidores, nome: this.nomePerfil };
  },
};
const contaBancaria = {
  numeroConta: "66666-7",
  saldo: 100,
  tipoConta: "Corrente",

  depositar: function (valor) {
    this.saldo += valor;
    console.log(
      `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`
    );
  },

  sacar: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para saque.");
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
  },

  consultarSaldo: function () {
    console.log(`Saldo atual: R$${this.saldo}`);
    return this.saldo;
  },
};
