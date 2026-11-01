const nome = document.getElementById("nome")
const preco = document.getElementById("preco")
const qtd = document.getElementById("qtd")
const btnCadastrar = document.getElementById("btnCadastrar")
const listaProdutos = document.getElementById("listaProdutos")
const totalProdutos = document.getElementById("totalProdutos")
const valorEstoque = document.getElementById("valorEstoque")
const mensagem = document.getElementById("mensagem")




// Avaliação: complete as funções abaixo. Não modifique o objeto window.App.
let produtos = [];

function adicionarProduto(nome, preco, quantidade) {
  if (nome === "" || preco === "" || quantidade === "") {
    mensagem.textContent = "Todos os campos devem ser preenchidos!";
    return false;
  }
  if (preco < 0 || quantidade < 0) {
    mensagem.textContent = "Preço e quantidade devem ser maiores que zero!";
    return false;
  }
  let objetoProduto = {
    nome: nome,
    preco: preco,
    quantidade: quantidade
  }
  produtos.push(objetoProduto);
  return true;
}

function listarProdutos() {
  // TODO R4: retornar o vetor de objetos de produtos (ou uma cópia).  // () => array de objetos
  return produtos

}

function obterResumo() {
  // TODO R5: calcular quantidade de produtos e valor total do estoque.
  let quantidadeTotal = produtos.length;
  let valorTotal = 0;

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    valorTotal += parseFloat(produto.preco) * parseInt(produto.quantidade);
  }

  return {
    quantidade: quantidadeTotal,
    valor: valorTotal
  };
}

function atualizarInterface() {
  // TODO R4/R5: criar os elementos da lista e atualizar os totais no DOM.
  totalProdutos.innerHTML = '';
  valorEstoque.innerHTML = '';
  mensagem.innerHTML = '';
  listaProdutos.innerHTML = '';
  const resumo = obterResumo();

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const item = document.createElement('li');
    item.textContent = `${produto.nome} - R$ ${produto.preco} - Quantidade: ${produto.quantidade}`;
    listaProdutos.appendChild(item);
  }
  const quantidadeTotal = document.createElement('p');
  quantidadeTotal.textContent = `Produtos cadastrados: ${resumo.quantidade}`;
  totalProdutos.appendChild(quantidadeTotal);

  const valorEstoqueElement = document.createElement('p');
  valorEstoqueElement.textContent = `Valor Total do Estoque: R$ ${resumo.valor.toFixed(2)}`;
  valorEstoque.appendChild(valorEstoqueElement);
}

// TODO R6: registrar evento com addEventListener no botão #btnAdicionar.
// O evento deverá ler os campos, chamar adicionarProduto e atualizar a interface.
btnCadastrar.addEventListener("click", function (event) {
  const nomeProduto = nome.value;
  const precoProduto = preco.value;
  const quantidadeProduto = qtd.value;

  if (adicionarProduto(nomeProduto, precoProduto, quantidadeProduto)) {
    atualizarInterface();
    nome.value = '';
    preco.value = '';
    qtd.value = '';
  }
});

// Interface usada exclusivamente pelo corretor automático.
window.App = {
  adicionarProduto,
  listarProdutos,
  obterResumo,
  atualizarInterface
};
