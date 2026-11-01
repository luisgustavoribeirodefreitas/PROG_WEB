const btnCadastrar = document.getElementById("btnCadastrar")
const listaProdutos = document.getElementById("listaProdutos")
const nome = document.getElementById("nome")
const preco = document.getElementById("preco")
const qtd = document.getElementById("qtd")
const detalhesProdutos = document.getElementById("secao-detalhes")

let lista = [];

function cadastrarProduto() {
    let listaProduto = []
    if (nome.value === "") {
        alert("Preecher nome ");
        return
    }
    if (preco.value === "") {
        alert("Preecher preco");
        return
    }
    if (qtd.value === "") {
        alert("Preecher quantidade ");
        return
    }
    listaProduto.push(nome.value)
    listaProduto.push(preco.value)
    listaProduto.push(qtd.value)
    nome.value = ""
    preco.value = ""
    qtd.value = ""
    lista.push(listaProduto)
    imprimirLista(lista)
}

function imprimirLista() {
    listaProdutos.innerHTML = "";
    detalhesProdutos.innerHTML = "";
    let valorTotal = 0
    let estoqueTotal = 0
    for (let i = 0; i < lista.length; i++) {
        valorTotal += lista[i][1] * lista[i][2]
        estoqueTotal += parseInt(lista[i][2],10)
        let item = document.createElement("li");
        let detalhes = document.createElement("ul");
        item.textContent = lista[i][0]
        detalhes.innerHTML = `
            <li>Preço: R$ ${lista[i][1]}</li>
            <li>Quantidade: ${lista[i][2]}</li>
        `;
        item.appendChild(detalhes);
        listaProdutos.appendChild(item);
    }


    let total = document.createElement("p")
    total.textContent = "Total de produtos:" + lista.length
    detalhesProdutos.appendChild(total)
    let estoque = document.createElement("p")
    estoque.textContent = "Quantidade de produtos em estoque: " + estoqueTotal
    detalhesProdutos.appendChild(estoque)
    let valor = document.createElement("p")
    valor.textContent = "Valor total em estoque: R$" + valorTotal.toFixed(2);
    detalhesProdutos.appendChild(valor)
}

btnCadastrar.addEventListener("click", cadastrarProduto);