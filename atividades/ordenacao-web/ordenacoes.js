const Vetor = [8, 3, 5, 1, 9, 6, 2, 7, 4];

function bubble(vet) {
    let vetor_ord = vet.slice();
    let mudancas = 0;
    let comparacoes = 0;
    let mudou = true;
    while (mudou) {
        mudou = false;
        for (let i = 0; i < vetor_ord.length - 1; i++) {
            comparacoes++;
            if (vetor_ord[i] < vetor_ord[i + 1]) {
                let aux = vetor_ord[i];
                vetor_ord[i] = vetor_ord[i + 1];
                vetor_ord[i + 1] = aux;
                mudancas++;
                mudou = true;
            }
        }
    }
    return {
        vetor: vetor_ord,
        mudancas: mudancas,
        comparacoes: comparacoes
    };
}

console.log(bubble(Vetor));


function selection(vet) {
    let vetor_ord = vet.slice();
    let mudancas = 0;
    let comparacoes = 0;

    for (let i = 0; i < vetor_ord.length - 1; i++) {
        let maior = i;
        for (let j = i + 1; j < vetor_ord.length; j++) {
            comparacoes++;

            if (vetor_ord[j] > vetor_ord[maior]) {
                maior = j;
            }
        }
        if (maior != i) {

            let aux = vetor_ord[i];
            vetor_ord[i] = vetor_ord[maior];
            vetor_ord[maior] = aux;

            mudancas++;
        }
    }
    return {
        vetor: vetor_ord,
        mudancas: mudancas,
        comparacoes: comparacoes
    };
}
console.log(selection(Vetor));


function insertion(vet) {
    let vetor_ord = vet.slice();
    let mudancas = 0;
    let comparacoes = 0;

    for (let i = 1; i < vetor_ord.length; i++) {
        let atual = vetor_ord[i];
        let j = i - 1;
        while (j >= 0) {
            comparacoes++;
            if (vetor_ord[j] < atual) {
                vetor_ord[j + 1] = vetor_ord[j];
                mudancas++;
                j = j - 1;
            } else {
                break;
            }
        }
        vetor_ord[j + 1] = atual;
    }
    return {
        vetor: vetor_ord,
        mudancas: mudancas,
        comparacoes: comparacoes
    };
}
console.log(insertion(Vetor));