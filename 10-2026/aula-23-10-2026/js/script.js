const { createElement } = require("react");

let nome = "lui"; 
let valor = 1.2;
let quantidade = 5;
let categoria = "informática";

const lista = document.getElementById("lista")

let objPoduto0 ={
    nome: "Luis",
    vaor: 10,
    quantidade: 5,
    categoria: "informatica"
};

let objPoduto1 ={
    nome: "Pedro",
    vaor: 1.2,
    quantidade: 5,
    categoria: "informatica"
};

let objPoduto2 ={
    nome: "João",
    vaor: 5.5,
    quantidade: 5,
    categoria: "informatica"
};

let carrinho = [objPoduto0 ={
    nome: "Luis",
    vaor: 10,
    quantidade: 5,
    categoria: "informatica"
}, bjPoduto1 ={
    nome: "Pedro",
    vaor: 1.2,
    quantidade: 5,
    categoria: "informatica"
}, bjPoduto2 ={
    nome: "João",
    vaor: 5.5,
    quantidade: 5,
    categoria: "informatica"
}];

console.log(carrinho)

function atualizarLista(){
    listaProdutos.innerHTML = "";
    for(let i =0; i < carrinho.length; i++){
        let item = document.createElement("li");
        item.textContent = carrinho[i];
        listaProdutos.appendChild(item);

        console.log(carrinho[i].nome);
        console.log(carrinho[i].valor);
    }
}

