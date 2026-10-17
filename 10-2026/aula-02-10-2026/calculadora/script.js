const display = document.getElementById("display");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const btnSomar = document.getElementById("btnSomar");
const btnSub = document.getElementById("btnSub");
const btnMulti = document.getElementById("btnMulti");
const btnDiv = document.getElementById("btnDiv");

const btnLimpar = document.getElementById("btnLimpar");
const btnIgual = document.getElementById("btnIgual");

let valorAtual = "";
let valorAnterior = "";
let operacao = null;

function atualizaDisplay(){
    if(valorAtual === ""){
        display.value = "0"
    }else{
        display.value = valorAtual;
    }
}

function adicionarNumero(numero){
    valorAtual = valorAtual + numero;
    atualizaDisplay();
}


btn9.addEventListener("click",
    function(){
        adicionarNumero("9");
    }
)