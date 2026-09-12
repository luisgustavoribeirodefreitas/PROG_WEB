let nome = "João";
const idade = 30;

console.log("Nome:", nome);
console.log("Idade:", idade);

if(idade >=18){
    console.log("Você é maior de idade");
} else if (idade <= 18){
    console.log("Você é menor de idade");
}else{
    console.log("Idade inválida");
}


for(let i= 0; i < 5; i++){
    console.log("Contador:", i, "Nome:", nome);
}

while(idade < 30){
    console.log("Idade atual:", idade);
    idade++;
}


function capturaNome(){
    let nome = document.getElementById("nome").value;

    document.getElementById("nomeCapturado").textContent = nome;
}