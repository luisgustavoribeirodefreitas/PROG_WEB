const btnCadastrar = document.getElementById("btnCadastrar")
const formulario = document.getElementById("formulario")
const listaProdutos = document.getElementById("listaProdutos")
const nome = document.getElementById("nome")
const preco = document.getElementById("preco")
const qtd = document.getElementById("qtd")

let lista = [];

function cadastrarProduto(){
    
    let listaProduto = []
    listaProduto.push(nome.value)
    listaProduto.push(preco.value)
    listaProduto.push(qtd.value)
    lista.push(listaProduto)
    imprimirLista(lista)
}

function imprimirLista(){
    listaProdutos.innerHTML = ""
    for(let i = 0; i < lista.length; i++){
        let item = document.createElement("ul")
        item.textContent = lista[i]
        for(let j = 1; j < lista[i].length; j++){
            let preco = document.createElement("li")
            let qtd = document.createElement("li")
            preco.textContent = lista[i][j]
            qtd.textContent = lista[i][j]
            item.appendChild(preco)
            item.appendChild(qtd)
        }
        listaProdutos.appendChild(item)
    }
}

btnCadastrar.addEventListener("click", cadastrarProduto);