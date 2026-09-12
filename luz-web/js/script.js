function capturaClique(acao) {

    let imagem = document.getElementById("Luz");
    let status = document.getElementById("statusLuz");
    let principal = document.getElementById("principal");

    if (acao === "acender") {

        imagem.src = "img/luz-acessa.png";

        principal.style.backgroundColor = "yellow";

        principal.style.color = "black";

        status.textContent = "acesa";

    } else if (acao === "apagar") {

        imagem.src = "img/luz-apagada.png";

        principal.style.backgroundColor = "black";

        principal.style.color = "white";

        status.textContent = "apagada";


    }

}