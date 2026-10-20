let produtos = [];

const nomeProduto = document.getElementById("nomeProduto");
const btnCadastrar = document.getElementById("btnCadastrar");
const listaProdutos = document.getElementById("listaProdutos");

btnCadastrar.addEventListener("click", adicionarProduto);

function adicionarProduto() {
    let nome = nomeProduto.value;
    if (nome === "") {
        alert("Por favor, insira o nome do produto.");
        return;
    }
    produtos.push(nome);
    nomeProduto.value = "";
    console.log(produtos);
    imprimirLista();
}

function imprimirLista() {
    listaProdutos.innerHTML = "";
    for(let i = 0; i< produtos.length; i++){
        let item = document.createElement("li");
        item.textContent = produtos[i];
        listaProdutos.appendChild(item);
    }
}


