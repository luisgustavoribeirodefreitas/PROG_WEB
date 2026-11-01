# Atividade 08 — Master Class de Programação Web

**Resolução completa dos exercícios 1 a 45**  
**Conteúdos:** HTML, CSS, Flexbox, Grid, Bootstrap, JavaScript, variáveis, condicionais, laços, funções, arrays, objetos, JSON, DOM, eventos e `localStorage`.

> Os exemplos seguem a orientação do enunciado: HTML, CSS e JavaScript separados quando há uma página completa. Para testar os exercícios com interface, salve os arquivos indicados na mesma pasta e abra `index.html` no navegador.

---

# Parte 1 — HTML e CSS

## Exercício 1 — Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha primeira página</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Minha primeira página Web.</p>
</body>
</html>
```

**Explicação:**

- `head`: contém metadados, título da aba, links para CSS e outras configurações. Seu conteúdo não é apresentado como conteúdo principal da página.
- `body`: contém os elementos que aparecem na página, como títulos, textos, imagens, formulários e botões.
- `meta charset="UTF-8"`: define a codificação de caracteres, permitindo representar corretamente acentos e caracteres especiais.

## Exercício 2 — Elementos HTML

Exemplo de página de apresentação de um curso:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de Desenvolvimento Web</title>
</head>
<body>
    <header>
        <h1>Curso de Desenvolvimento Web</h1>
        <p>Aprenda a criar páginas e aplicações para a Internet.</p>
    </header>

    <main>
        <section>
            <h2>Sobre o curso</h2>
            <p>O curso apresenta os fundamentos de HTML, CSS e JavaScript.</p>
            <img src="https://placehold.co/600x250" alt="Imagem ilustrativa sobre desenvolvimento Web">
        </section>

        <section>
            <h2>Conteúdos estudados</h2>
            <ul>
                <li>Estruturação com HTML</li>
                <li>Estilização com CSS</li>
                <li>Interatividade com JavaScript</li>
                <li>Manipulação do DOM</li>
            </ul>
        </section>

        <section>
            <h2>Inscrição</h2>
            <p>Saiba mais sobre a formação no
                <a href="https://developer.mozilla.org/pt-BR/docs/Learn_web_development"
                   target="_blank" rel="noopener noreferrer">material de desenvolvimento Web</a>.
            </p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 — Curso de Desenvolvimento Web</p>
    </footer>
</body>
</html>
```

Foram utilizados elementos semânticos: `header` representa o cabeçalho, `main` identifica o conteúdo principal, `section` agrupa assuntos relacionados e `footer` representa o rodapé. Também foram utilizados títulos, parágrafos, imagem, lista e link.

## Exercício 3 — Formulário de cadastro

```html
<form action="#" method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" placeholder="exemplo@email.com" required>

    <label for="idade">Idade:</label>
    <input type="number" id="idade" name="idade" min="1" placeholder="Sua idade" required>

    <label for="curso">Curso:</label>
    <select id="curso" name="curso" required>
        <option value="">Selecione um curso</option>
        <option value="engenharia-software">Engenharia de Software</option>
        <option value="sistemas-informacao">Sistemas de Informação</option>
        <option value="ciencia-computacao">Ciência da Computação</option>
    </select>

    <button type="submit">Cadastrar</button>
</form>
```

**Diferença entre os atributos:**

- `id`: identifica um elemento de forma única no documento. Pode ser usado no CSS e no JavaScript.
- `name`: define o nome do campo enviado quando o formulário é submetido.
- `type`: define o tipo de campo ou comportamento do controle, como `text`, `email`, `number` ou `submit`.
- `placeholder`: apresenta uma dica dentro do campo enquanto ele está vazio. Não substitui o `label`.

## Exercício 4 — Seletores CSS

Considerando o HTML do enunciado:

```html
<h1 id="titulo">Minha Loja</h1>
<p class="descricao">Produtos disponíveis</p>
<p class="descricao">Ofertas especiais</p>
```

CSS:

```css
body {
    font-family: Arial, sans-serif;
}

#titulo {
    text-align: center;
}

.descricao {
    color: #2563eb;
}
```

**Explicação dos seletores:**

- Por elemento (`p`, `h1`, `body`): seleciona todos os elementos daquela tag.
- Por classe (`.descricao`): seleciona todos os elementos que possuem a classe indicada. Uma classe pode ser reutilizada.
- Por identificador (`#titulo`): seleciona o elemento que possui aquele `id`, que deve ser único na página.

## Exercício 5 — Box Model

HTML:

```html
<div class="card-produto">
    <h2>Notebook</h2>
    <p>Notebook para estudos e trabalho.</p>
    <strong>R$ 3.500,00</strong>
</div>
```

CSS:

```css
.card-produto {
    width: 280px;
    padding: 20px;
    margin: 24px auto;
    border: 1px solid #cccccc;
    border-radius: 12px;
    box-sizing: border-box;
}
```

**Explicação:**

- `width`: define a largura do conteúdo. Com `box-sizing: border-box`, a largura informada também inclui padding e borda.
- `padding`: cria espaço interno entre o conteúdo e a borda.
- `margin`: cria espaço externo ao redor do elemento, separando-o dos demais.
- `border`: define a borda do elemento.
- `border-radius`: arredonda os cantos da borda.

## Exercício 6 — Flexbox

HTML:

```html
<div class="container-cards">
    <article class="card">Card 1</article>
    <article class="card">Card 2</article>
    <article class="card">Card 3</article>
</div>
```

CSS:

```css
.container-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    width: 180px;
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #999;
    border-radius: 8px;
}
```

**Explicação:** `display: flex` ativa o Flexbox; `justify-content` distribui os itens no eixo principal; `align-items` alinha os itens no eixo transversal; `gap` define o espaço entre os itens.

A diferença é que `gap` controla diretamente o espaçamento entre os elementos do container, sem criar espaço externo antes do primeiro ou depois do último item. `margin` pertence a cada elemento e pode criar espaço também nas extremidades ou exigir ajustes individuais.

## Exercício 7 — CSS Grid

HTML:

```html
<div class="grade">
    <div>1</div><div>2</div><div>3</div>
    <div>4</div><div>5</div><div>6</div>
    <div>7</div><div>8</div><div>9</div>
</div>
```

CSS:

```css
.grade {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.grade div {
    min-height: 90px;
    display: grid;
    place-items: center;
    background-color: #dbeafe;
    border: 1px solid #93c5fd;
}
```

**Explicação:** `repeat(3, 1fr)` cria três colunas com uma fração igual do espaço disponível. A unidade `fr` representa uma fração do espaço livre do container. Assim, `1fr` em cada coluna faz com que as três tenham a mesma largura.

## Exercício 8 — Bootstrap

Exemplo com três cards responsivos utilizando Bootstrap 5:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cards com Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <main class="container py-4">
        <h1 class="mb-4">Nossos cursos</h1>
        <div class="row g-3">
            <div class="col-12 col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title h5">HTML</h2>
                        <p class="card-text">Estruture páginas Web.</p>
                        <a href="#" class="btn btn-primary">Saiba mais</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title h5">CSS</h2>
                        <p class="card-text">Estilize páginas e componentes.</p>
                        <a href="#" class="btn btn-primary">Saiba mais</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title h5">JavaScript</h2>
                        <p class="card-text">Adicione interatividade.</p>
                        <a href="#" class="btn btn-primary">Saiba mais</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
```

**Explicação das classes:**

- `container`: cria uma área centralizada com largura adaptável aos tamanhos de tela.
- `row`: cria uma linha do sistema de grid do Bootstrap.
- `col-md-4`: ocupa quatro das doze colunas a partir do breakpoint `md`, resultando em três colunas por linha. Com `col-12`, cada card ocupa toda a largura em telas menores.
- `card`: fornece a estrutura visual de um card.
- `btn`: aplica a aparência e o comportamento visual de botão a um link ou botão.

---

# Parte 2 — Fundamentos de JavaScript

## Exercício 9 — Variáveis e tipos

```javascript
let nome = "Notebook";
let preco = 3500;
let disponivel = true;
let quantidade = 5;

console.log(typeof nome);        // string
console.log(typeof preco);       // number
console.log(typeof disponivel);  // boolean
console.log(typeof quantidade);  // number
```

`nome` é do tipo `string`; `preco` e `quantidade` são do tipo `number`; `disponivel` é do tipo `boolean`.

**Diferença entre `let` e `const`:** `let` permite atribuir um novo valor à variável. `const` não permite reatribuição depois da inicialização. Em objetos e arrays declarados com `const`, suas propriedades ou elementos ainda podem ser alterados; o que não pode mudar é a referência armazenada na constante.

## Exercício 10 — Operadores

```javascript
let preco = 150;
let quantidade = 3;

let total = preco * quantidade;
console.log("Valor total da compra: R$ " + total);
```

**Resultado:** `Valor total da compra: R$ 450`.

O operador `*` multiplica o preço pela quantidade comprada.

## Exercício 11 — Condicionais

```javascript
let quantidade = 3;

if (quantidade === 0) {
    console.log("Produto indisponível");
} else if (quantidade >= 1 && quantidade <= 5) {
    console.log("Estoque baixo");
} else {
    console.log("Produto disponível");
}
```

Como a quantidade é `3`, a saída será `Estoque baixo`.

## Exercício 12 — Laço FOR

Números de 1 a 20:

```javascript
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
```

Somente os números pares:

```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

O operador `%` retorna o resto da divisão. Quando o resto da divisão por 2 é zero, o número é par.

## Exercício 13 — Funções

```javascript
function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

let resultado = calcularTotal(150, 3);
console.log(resultado); // 450
```

`return` devolve um valor para o local que chamou a função e encerra sua execução naquele ponto. `console.log()` apenas apresenta uma informação no console; não substitui o retorno da função. Uma função pode retornar um valor sem mostrá-lo, e esse valor pode ser armazenado ou utilizado em outro cálculo.

---

# Parte 3 — Vetores (Arrays)

## Exercício 14 — Criando um vetor

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];
```

- Existem **4 elementos**.
- Posição `0`: `"Notebook"`.
- Posição `2`: `"Teclado"`.
- Último índice válido: `3`.
- `produtos.length` retorna `4`, que é a quantidade de elementos do vetor.

Os índices começam em zero. Por isso, o último índice válido é sempre `length - 1`, desde que o vetor não esteja vazio.

## Exercício 15 — Alterando elementos

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

produtos[1] = "Mouse Gamer";
produtos[3] = "Impressora";

console.log(produtos);
// ["Notebook", "Mouse Gamer", "Teclado", "Impressora"]
```

A atribuição pelo índice substitui o elemento que já está naquela posição.

## Exercício 16 — Adicionando elementos

```javascript
let produtos = ["Notebook", "Mouse"];

produtos.push("Teclado");
produtos.push("Monitor");

console.log(produtos);
// ["Notebook", "Mouse", "Teclado", "Monitor"]
```

`produtos[2] = "Teclado"` atribui o valor diretamente à posição de índice 2. Já `produtos.push("Teclado")` adiciona o elemento ao final do vetor, sem precisar indicar o índice. `push()` também retorna o novo tamanho do vetor.

## Exercício 17 — Removendo elementos

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

produtos.pop();
console.log(produtos); // ["Notebook", "Mouse", "Teclado"]

produtos.shift();
console.log(produtos); // ["Mouse", "Teclado"]

produtos.unshift("Impressora");
console.log(produtos); // ["Impressora", "Mouse", "Teclado"]
```

- `pop()` remove o último elemento.
- `shift()` remove o primeiro elemento.
- `unshift()` adiciona um ou mais elementos no início do vetor.

## Exercício 18 — Percorrendo um vetor

```javascript
let alunos = ["Ana", "Carlos", "Maria", "João"];

for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno ${i + 1}: ${alunos[i]}`);
}
```

Saída:

```text
Aluno 1: Ana
Aluno 2: Carlos
Aluno 3: Maria
Aluno 4: João
```

O índice `i` começa em zero, mas a apresentação começa em 1. Por isso, foi utilizado `i + 1` no texto.

## Exercício 19 — Soma dos elementos

```javascript
let notas = [7, 8, 6, 9, 10];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log("Soma:", soma);   // 40
console.log("Média:", media); // 8
```

A soma das notas é `40` e a média é `8`.

## Exercício 20 — Maior valor

```javascript
let numeros = [12, 5, 27, 8, 19];
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("Maior valor:", maior); // 27
```

A variável `maior` começa com o primeiro elemento. O laço compara os próximos valores e atualiza `maior` sempre que encontra um número superior.

## Exercício 21 — Pesquisa em vetor

```javascript
let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];
let pesquisa = "Teclado";
let encontrado = false;

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] === pesquisa) {
        console.log(`Produto encontrado na posição ${i}.`);
        encontrado = true;
        break;
    }
}

if (encontrado === false) {
    console.log("Produto não encontrado.");
}
```

**Saída:** `Produto encontrado na posição 2.`

A variável `encontrado` registra se houve correspondência. O `break` encerra o laço assim que o produto é localizado.

## Exercício 22 — Selection Sort

```javascript
let numeros = [8, 3, 6, 1, 9, 2];

for (let i = 0; i < numeros.length - 1; i++) {
    let indiceMenor = i;

    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[j] < numeros[indiceMenor]) {
            indiceMenor = j;
        }
    }

    let temporario = numeros[i];
    numeros[i] = numeros[indiceMenor];
    numeros[indiceMenor] = temporario;
}

console.log(numeros); // [1, 2, 3, 6, 8, 9]
```

**Função das variáveis:**

- `i`: indica a posição que receberá o próximo menor elemento da parte ainda não ordenada.
- `j`: percorre os elementos à frente de `i`, procurando um valor menor.
- `indiceMenor`: guarda a posição do menor valor encontrado durante aquela passagem.

Ao final de cada passagem do laço externo, o menor elemento da parte não ordenada é colocado na posição correta.

---

# Parte 4 — Objetos JavaScript

## Exercício 23 — Criando um objeto

```javascript
let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 5
};

console.log(produto.nome);  // Notebook
console.log(produto.preco); // 3500
```

Um objeto é uma estrutura que agrupa informações relacionadas em uma única variável. As informações armazenadas nele são chamadas de propriedades, formadas por pares de chave e valor.

Uma variável simples armazena diretamente um valor, como um número ou texto. Um objeto reúne várias propriedades, que podem ter tipos diferentes. O acesso pode ser feito pela notação de ponto, como `produto.nome` e `produto.preco`.

## Exercício 24 — Acessando propriedades

```javascript
let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 5
};

console.log(`Produto: ${produto.nome}`);
console.log(`Preço: R$ ${produto.preco}`);
console.log(`Quantidade: ${produto.quantidade}`);
```

Saída:

```text
Produto: Notebook
Preço: R$ 3500
Quantidade: 5
```

## Exercício 25 — Alterando propriedades

```javascript
let aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "Sistemas de Informação",
    nota: 7
};

aluno.nota = 9;
aluno.idade = 21;
aluno.aprovado = true;

console.log(aluno);
```

Objeto atualizado:

```javascript
{
    nome: "Carlos",
    idade: 21,
    curso: "Sistemas de Informação",
    nota: 9,
    aprovado: true
}
```

As propriedades `nota` e `idade` foram atualizadas. A propriedade `aprovado` foi criada por meio de uma nova atribuição.

## Exercício 26 — Objeto com função

```javascript
let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 5,

    calcularTotal: function() {
        return this.preco * this.quantidade;
    }
};

console.log(produto.calcularTotal()); // 17500
```

`this` é uma referência ao objeto associado à chamada do método. Nesse exemplo, `this.preco` acessa a propriedade `preco` do objeto `produto`, e `this.quantidade` acessa sua quantidade. Assim, o método consegue utilizar as propriedades do próprio objeto.

## Exercício 27 — Objetos e condicionais

```javascript
let produto = {
    nome: "Mouse",
    preco: 80,
    quantidade: 0
};

function verificarDisponibilidade(produto) {
    if (produto.quantidade > 0) {
        return "Disponível";
    } else {
        return "Indisponível";
    }
}

console.log(verificarDisponibilidade(produto)); // Indisponível
```

A função recebe um objeto, verifica sua propriedade `quantidade` e retorna uma mensagem conforme a condição.

---

# Parte 5 — Vetores de objetos

## Exercício 28 — Criando um vetor de objetos

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Teclado", preco: 150, quantidade: 10 }
];
```

- Existem **3 objetos** no vetor.
- `produtos[0]` retorna o primeiro objeto inteiro: `{ nome: "Notebook", preco: 3500, quantidade: 5 }`.
- `produtos[0].nome` retorna `"Notebook"`.
- `produtos[1].preco` retorna `80`.
- A quantidade do terceiro produto é acessada com `produtos[2].quantidade`, que retorna `10`.

## Exercício 29 — Percorrendo objetos

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Teclado", preco: 150, quantidade: 10 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(`${produtos[i].nome} - R$ ${produtos[i].preco}`);
}
```

Saída:

```text
Notebook - R$ 3500
Mouse - R$ 80
Teclado - R$ 150
```

O índice seleciona o objeto no vetor; em seguida, a notação de ponto acessa as propriedades `nome` e `preco`.

## Exercício 30 — Adicionando objetos

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Teclado", preco: 150, quantidade: 10 }
];

let novoProduto = {
    nome: "Monitor",
    preco: 900,
    quantidade: 8
};

produtos.push(novoProduto);

for (let i = 0; i < produtos.length; i++) {
    console.log(`${produtos[i].nome} - R$ ${produtos[i].preco} - ${produtos[i].quantidade} unidades`);
}
```

O `push()` adiciona o objeto `novoProduto` ao final do vetor.

## Exercício 31 — Pesquisando objetos

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Teclado", preco: 150, quantidade: 10 }
];

function pesquisarProduto(nome) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome.toLowerCase() === nome.toLowerCase()) {
            return produtos[i];
        }
    }

    return null;
}

console.log(pesquisarProduto("Mouse"));
console.log(pesquisarProduto("Impressora")); // null
```

A função percorre o vetor e compara o nome de cada objeto com o nome pesquisado. `toLowerCase()` permite que a busca não diferencie letras maiúsculas e minúsculas. Quando encontra, retorna o objeto; quando termina sem encontrar, retorna `null`.

## Exercício 32 — Calculando o estoque

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 2 },
    { nome: "Mouse", preco: 80, quantidade: 10 },
    { nome: "Teclado", preco: 150, quantidade: 5 }
];

let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].preco * produtos[i].quantidade;
}

console.log("Valor total do estoque: R$ " + totalEstoque.toFixed(2));
```

Cálculo:

- Notebook: `3500 × 2 = 7000`.
- Mouse: `80 × 10 = 800`.
- Teclado: `150 × 5 = 750`.
- Total: `7000 + 800 + 750 = 8550`.

**Resultado esperado:** `R$ 8550,00`.

---

# Parte 6 — JSON

## Exercício 33 — Objeto e JSON

Um objeto JavaScript é uma estrutura de dados utilizada diretamente pelo código, permitindo acessar propriedades e executar métodos. JSON (JavaScript Object Notation) é um formato textual utilizado para representar e trocar dados entre sistemas.

Exemplo de objeto JavaScript:

```javascript
let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 5
};
```

Representação em JSON:

```json
{
    "nome": "Notebook",
    "preco": 3500,
    "quantidade": 5
}
```

No JSON, as chaves e os textos devem utilizar aspas duplas. JSON é texto: para trabalhar com seus dados como um objeto JavaScript, é necessário convertê-lo.

## Exercício 34 — JSON.stringify()

```javascript
let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 5
};

let textoJSON = JSON.stringify(produto);

console.log(textoJSON);
console.log(typeof textoJSON); // string
```

`JSON.stringify()` converte o objeto JavaScript em uma string no formato JSON. Por isso, `typeof textoJSON` retorna `"string"`.

## Exercício 35 — JSON.parse()

```javascript
let textoJSON = '{"nome":"Mouse","preco":80,"quantidade":10}';

let produto = JSON.parse(textoJSON);

console.log(produto.nome);  // Mouse
console.log(produto.preco); // 80
```

`JSON.parse()` interpreta o texto JSON e cria a estrutura correspondente em JavaScript, permitindo acessar suas propriedades.

## Exercício 36 — Vetor de objetos para JSON

```javascript
let produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 }
];

let textoJSON = JSON.stringify(produtos);
console.log(textoJSON);

let produtosRecuperados = JSON.parse(textoJSON);
console.log(produtosRecuperados);
console.log(produtosRecuperados[0].nome); // Notebook
```

`JSON.stringify()` transforma o vetor de objetos em texto JSON. Depois, `JSON.parse()` recupera um novo vetor com os objetos e propriedades representados no texto.

---

# Parte 7 — DOM e eventos

## Exercício 37 — Manipulação do DOM

HTML:

```html
<h1 id="titulo">Programação Web</h1>
<button id="botao">Alterar título</button>
<script src="script.js" defer></script>
```

Arquivo `script.js`:

```javascript
const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");

botao.addEventListener("click", function() {
    titulo.textContent = "Título alterado com JavaScript!";
});
```

`getElementById()` localiza os elementos pelo identificador. Ao clicar no botão, o evento é executado e `textContent` altera o texto do título.

## Exercício 38 — addEventListener()

Código do enunciado:

```javascript
const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    console.log("Botão clicado!");
});
```

**Explicação:**

- Evento: uma ação ou ocorrência reconhecida pelo navegador, como clique, digitação, envio de formulário ou carregamento da página.
- `addEventListener()`: registra uma função para ser executada quando determinado evento ocorrer em um elemento.
- `"click"`: é o tipo de evento, nesse caso, o clique do usuário.
- A função é executada quando o botão recebe o clique. Ela não é executada apenas por registrar o evento.

## Exercício 39 — Cadastro de nomes

Arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Nomes</title>
</head>
<body>
    <h1>Cadastro de Nomes</h1>

    <label for="nome">Nome:</label>
    <input type="text" id="nome" placeholder="Digite um nome">
    <button id="adicionar">Adicionar</button>

    <h2>Nomes cadastrados</h2>
    <ul id="listaNomes"></ul>
    <p id="quantidade">Quantidade de nomes: 0</p>

    <script src="script.js" defer></script>
</body>
</html>
```

Arquivo `script.js`:

```javascript
let nomes = [];

const campoNome = document.getElementById("nome");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("listaNomes");
const quantidade = document.getElementById("quantidade");

function atualizarLista() {
    lista.innerHTML = "";

    for (let i = 0; i < nomes.length; i++) {
        const item = document.createElement("li");
        item.textContent = nomes[i];
        lista.appendChild(item);
    }

    quantidade.textContent = `Quantidade de nomes: ${nomes.length}`;
}

botao.addEventListener("click", function() {
    const nome = campoNome.value.trim();

    if (nome === "") {
        alert("Digite um nome antes de cadastrar.");
        return;
    }

    nomes.push(nome);
    campoNome.value = "";
    atualizarLista();
    campoNome.focus();
});
```

O vetor `nomes` armazena os nomes cadastrados. O botão adiciona o conteúdo com `push()`. A função `atualizarLista()` utiliza `for` para percorrer o vetor e recriar os elementos da lista HTML, além de atualizar a quantidade.

## Exercício 40 — Cadastro de produtos

Arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Produtos</title>
</head>
<body>
    <h1>Cadastro de Produtos</h1>

    <form id="formProduto">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" required>

        <label for="preco">Preço:</label>
        <input type="number" id="preco" min="0.01" step="0.01" required>

        <label for="quantidade">Quantidade:</label>
        <input type="number" id="quantidade" min="0" step="1" required>

        <button type="submit">Cadastrar</button>
    </form>

    <h2>Produtos cadastrados</h2>
    <ul id="listaProdutos"></ul>

    <script src="script.js" defer></script>
</body>
</html>
```

Arquivo `script.js`:

```javascript
let produtos = [];

const formulario = document.getElementById("formProduto");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoQuantidade = document.getElementById("quantidade");
const lista = document.getElementById("listaProdutos");

function atualizarLista() {
    lista.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {
        const item = document.createElement("li");
        item.textContent = `${produtos[i].nome} - R$ ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade} unidades`;
        lista.appendChild(item);
    }
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = campoNome.value.trim();
    const preco = Number(campoPreco.value);
    const quantidade = Number(campoQuantidade.value);

    if (nome === "" || !Number.isFinite(preco) || preco <= 0 ||
        !Number.isInteger(quantidade) || quantidade < 0) {
        alert("Informe nome, preço maior que zero e quantidade inteira não negativa.");
        return;
    }

    const produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    produtos.push(produto);
    atualizarLista();
    formulario.reset();
});
```

Cada cadastro cria um objeto com `nome`, `preco` e `quantidade`, adicionando-o ao vetor por meio de `push()`. A função de atualização percorre o vetor e apresenta os produtos na página.

---

# Parte 8 — Armazenamento no navegador

## Exercício 41 — localStorage

`localStorage` é um recurso do navegador que permite armazenar informações como pares de chave e valor. Os dados permanecem disponíveis após atualizar ou fechar e abrir o navegador, até serem removidos pelo código ou pelo usuário.

**Diferença:** uma variável JavaScript existe durante a execução do contexto em que foi criada. Quando a página é recarregada, normalmente seu valor é perdido e o código começa novamente. Já os dados gravados no `localStorage` ficam armazenados no navegador e podem ser recuperados em visitas posteriores à mesma origem (protocolo, domínio e porta).

O `localStorage` armazena valores em texto. Para guardar objetos e vetores, normalmente utilizamos `JSON.stringify()` antes de salvar e `JSON.parse()` ao recuperar.

## Exercício 42 — Salvando informações

Arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salvar Nome</title>
</head>
<body>
    <h1>Identificação do usuário</h1>
    <label for="nome">Nome:</label>
    <input type="text" id="nome">
    <button id="salvar">Salvar nome</button>
    <p id="mensagem"></p>

    <script src="script.js" defer></script>
</body>
</html>
```

Arquivo `script.js`:

```javascript
const campoNome = document.getElementById("nome");
const botao = document.getElementById("salvar");
const mensagem = document.getElementById("mensagem");

const nomeSalvo = localStorage.getItem("nomeUsuario");

if (nomeSalvo !== null) {
    campoNome.value = nomeSalvo;
    mensagem.textContent = `Nome salvo: ${nomeSalvo}`;
}

botao.addEventListener("click", function() {
    const nome = campoNome.value.trim();

    if (nome === "") {
        mensagem.textContent = "Digite um nome válido.";
        return;
    }

    localStorage.setItem("nomeUsuario", nome);
    mensagem.textContent = `Nome salvo: ${nome}`;
});
```

`setItem("nomeUsuario", nome)` salva o nome com a chave `nomeUsuario`. `getItem("nomeUsuario")` recupera o valor quando a página é aberta novamente.

## Exercício 43 — Salvando um objeto

```javascript
let usuario = {
    nome: "Ana",
    idade: 22,
    curso: "Sistemas de Informação"
};

// Converte o objeto em texto JSON e salva.
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recupera o texto e converte novamente em objeto.
let textoSalvo = localStorage.getItem("usuario");
let usuarioRecuperado = JSON.parse(textoSalvo);

console.log(usuarioRecuperado.nome);  // Ana
console.log(usuarioRecuperado.idade); // 22
console.log(usuarioRecuperado.curso); // Sistemas de Informação
```

A conversão com `JSON.stringify()` é necessária porque o `localStorage` armazena texto. Depois, `JSON.parse()` recupera os dados como objeto JavaScript.

## Exercício 44 — Persistindo produtos

Arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos Persistentes</title>
</head>
<body>
    <h1>Cadastro de Produtos</h1>

    <form id="formProduto">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" required>

        <label for="preco">Preço:</label>
        <input type="number" id="preco" min="0.01" step="0.01" required>

        <label for="quantidade">Quantidade:</label>
        <input type="number" id="quantidade" min="0" step="1" required>

        <button type="submit">Cadastrar</button>
    </form>

    <h2>Produtos cadastrados</h2>
    <ul id="listaProdutos"></ul>

    <script src="script.js" defer></script>
</body>
</html>
```

Arquivo `script.js`:

```javascript
let produtos = [];

const formulario = document.getElementById("formProduto");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoQuantidade = document.getElementById("quantidade");
const lista = document.getElementById("listaProdutos");

function carregarProdutos() {
    const dadosSalvos = localStorage.getItem("produtos");

    if (dadosSalvos !== null) {
        try {
            const dadosConvertidos = JSON.parse(dadosSalvos);
            if (Array.isArray(dadosConvertidos)) {
                produtos = dadosConvertidos;
            }
        } catch (erro) {
            produtos = [];
            console.error("Não foi possível recuperar os produtos salvos.", erro);
        }
    }
}

function salvarProdutos() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function atualizarLista() {
    lista.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {
        const item = document.createElement("li");
        item.textContent = `${produtos[i].nome} - R$ ${produtos[i].preco.toFixed(2)} - ${produtos[i].quantidade} unidades`;
        lista.appendChild(item);
    }
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = campoNome.value.trim();
    const preco = Number(campoPreco.value);
    const quantidade = Number(campoQuantidade.value);

    if (nome === "" || !Number.isFinite(preco) || preco <= 0 ||
        !Number.isInteger(quantidade) || quantidade < 0) {
        alert("Preencha os campos corretamente.");
        return;
    }

    produtos.push({ nome, preco, quantidade });
    salvarProdutos();
    atualizarLista();
    formulario.reset();
});

carregarProdutos();
atualizarLista();
```

Ao abrir a página, `carregarProdutos()` verifica se existe conteúdo salvo. Se existir, converte o JSON em vetor; se não existir, o vetor permanece vazio. Ao cadastrar um produto, o código atualiza o vetor, salva a nova versão no `localStorage` e redesenha a lista.

---

# Parte 9 — Desafio integrador

## Exercício 45 — Sistema de Cadastro de Produtos

A solução abaixo atende aos requisitos RF01 a RF08. O projeto utiliza três arquivos separados:

```text
cadastro-produtos/
├── index.html
├── style.css
└── script.js
```

### 1. Arquivo `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Produtos</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <main class="container">
        <header class="cabecalho">
            <h1>Cadastro de Produtos</h1>
            <p>Gerencie os produtos e acompanhe o valor do estoque.</p>
        </header>

        <section class="painel" aria-labelledby="tituloCadastro">
            <h2 id="tituloCadastro">Adicionar produto</h2>

            <form id="formProduto">
                <div class="campo">
                    <label for="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Ex.: Notebook"
                        maxlength="80"
                        required
                    >
                </div>

                <div class="campo">
                    <label for="preco">Preço (R$)</label>
                    <input
                        type="number"
                        id="preco"
                        name="preco"
                        placeholder="Ex.: 3500.00"
                        min="0.01"
                        step="0.01"
                        required
                    >
                </div>

                <div class="campo">
                    <label for="quantidade">Quantidade</label>
                    <input
                        type="number"
                        id="quantidade"
                        name="quantidade"
                        placeholder="Ex.: 5"
                        min="0"
                        step="1"
                        required
                    >
                </div>

                <button type="submit" class="botao">Adicionar produto</button>
                <p id="mensagem" class="mensagem" role="status" aria-live="polite"></p>
            </form>
        </section>

        <section class="painel" aria-labelledby="tituloProdutos">
            <div class="titulo-lista">
                <h2 id="tituloProdutos">Produtos cadastrados</h2>
                <span id="totalProdutos" class="contador">0 produtos</span>
            </div>

            <div class="tabela-responsiva">
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody id="listaProdutos">
                        <!-- Os produtos serão inseridos pelo JavaScript. -->
                    </tbody>
                </table>
            </div>

            <p id="estadoVazio" class="estado-vazio">Nenhum produto cadastrado.</p>

            <div class="resumo">
                <span>Valor total do estoque</span>
                <strong id="valorEstoque">R$ 0,00</strong>
            </div>
        </section>
    </main>
</body>
</html>
```

### 2. Arquivo `style.css`

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 32px 16px;
    background: #f3f5f9;
    color: #1f2937;
    font-family: Arial, Helvetica, sans-serif;
}

.container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}

.cabecalho {
    margin-bottom: 24px;
    text-align: center;
}

.cabecalho h1 {
    margin-bottom: 8px;
    color: #172554;
}

.cabecalho p {
    margin-top: 0;
    color: #64748b;
}

.painel {
    margin-bottom: 24px;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
}

.painel h2 {
    margin-top: 0;
    color: #1e3a8a;
    font-size: 1.2rem;
}

#formProduto {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 16px;
    align-items: end;
}

.campo {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.campo label {
    font-weight: 600;
}

.campo input {
    width: 100%;
    min-height: 42px;
    padding: 10px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 7px;
    font: inherit;
}

.campo input:focus {
    outline: 2px solid #93c5fd;
    border-color: #2563eb;
}

.botao {
    grid-column: 1 / -1;
    min-height: 44px;
    padding: 10px 16px;
    border: 0;
    border-radius: 7px;
    background: #2563eb;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
}

.botao:hover {
    background: #1d4ed8;
}

.mensagem {
    grid-column: 1 / -1;
    min-height: 20px;
    margin: 0;
    font-size: 0.9rem;
}

.mensagem.erro {
    color: #b91c1c;
}

.mensagem.sucesso {
    color: #15803d;
}

.titulo-lista {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.contador {
    color: #475569;
    font-size: 0.9rem;
}

.tabela-responsiva {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

th,
td {
    padding: 13px 10px;
    border-bottom: 1px solid #e2e8f0;
}

th {
    background: #f8fafc;
    color: #334155;
    font-size: 0.9rem;
}

td:not(:first-child),
th:not(:first-child) {
    text-align: right;
    white-space: nowrap;
}

.estado-vazio {
    padding: 20px 0;
    color: #64748b;
    text-align: center;
}

.resumo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
    padding-top: 18px;
    border-top: 2px solid #e2e8f0;
}

.resumo strong {
    color: #166534;
    font-size: 1.25rem;
}

@media (max-width: 650px) {
    body {
        padding: 18px 10px;
    }

    .painel {
        padding: 18px;
    }

    #formProduto {
        grid-template-columns: 1fr;
    }

    .titulo-lista,
    .resumo {
        align-items: flex-start;
        flex-direction: column;
    }
}
```

### 3. Arquivo `script.js`

```javascript
// Vetor que mantém os produtos durante o uso da aplicação.
let produtos = [];

// Elementos da interface.
const formulario = document.getElementById("formProduto");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoQuantidade = document.getElementById("quantidade");
const listaProdutos = document.getElementById("listaProdutos");
const totalProdutos = document.getElementById("totalProdutos");
const valorEstoque = document.getElementById("valorEstoque");
const estadoVazio = document.getElementById("estadoVazio");
const mensagem = document.getElementById("mensagem");

// Formata valores numéricos como moeda brasileira.
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

function formatarMoeda(valor) {
    return formatadorMoeda.format(valor);
}

// Recupera os produtos que foram salvos anteriormente.
function carregarProdutos() {
    const dadosSalvos = localStorage.getItem("produtos");

    if (dadosSalvos === null) {
        produtos = [];
        return;
    }

    try {
        const dadosConvertidos = JSON.parse(dadosSalvos);

        if (Array.isArray(dadosConvertidos)) {
            produtos = dadosConvertidos;
        } else {
            produtos = [];
        }
    } catch (erro) {
        produtos = [];
        console.error("Erro ao recuperar os produtos:", erro);
    }
}

// Converte o vetor em JSON e salva no navegador.
function salvarProdutos() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

// Limpa e recria as linhas da tabela com os dados do vetor.
function atualizarInterface() {
    listaProdutos.innerHTML = "";

    let somaEstoque = 0;

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        const subtotal = produto.preco * produto.quantidade;
        somaEstoque += subtotal;

        const linha = document.createElement("tr");

        const colunaNome = document.createElement("td");
        colunaNome.textContent = produto.nome;

        const colunaPreco = document.createElement("td");
        colunaPreco.textContent = formatarMoeda(produto.preco);

        const colunaQuantidade = document.createElement("td");
        colunaQuantidade.textContent = `${produto.quantidade} un.`;

        const colunaSubtotal = document.createElement("td");
        colunaSubtotal.textContent = formatarMoeda(subtotal);

        linha.appendChild(colunaNome);
        linha.appendChild(colunaPreco);
        linha.appendChild(colunaQuantidade);
        linha.appendChild(colunaSubtotal);

        listaProdutos.appendChild(linha);
    }

    totalProdutos.textContent = produtos.length === 1
        ? "1 produto"
        : `${produtos.length} produtos`;

    valorEstoque.textContent = formatarMoeda(somaEstoque);
    estadoVazio.hidden = produtos.length > 0;
}

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
}

// Cadastra um produto após validar os campos.
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = campoNome.value.trim();
    const preco = Number(campoPreco.value);
    const quantidade = Number(campoQuantidade.value);

    if (nome === "") {
        mostrarMensagem("Informe o nome do produto.", "erro");
        campoNome.focus();
        return;
    }

    if (!Number.isFinite(preco) || preco <= 0) {
        mostrarMensagem("Informe um preço válido maior que zero.", "erro");
        campoPreco.focus();
        return;
    }

    if (!Number.isInteger(quantidade) || quantidade < 0) {
        mostrarMensagem("Informe uma quantidade inteira igual ou maior que zero.", "erro");
        campoQuantidade.focus();
        return;
    }

    const novoProduto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    produtos.push(novoProduto);
    salvarProdutos();
    atualizarInterface();

    formulario.reset();
    mostrarMensagem("Produto cadastrado com sucesso!", "sucesso");
    campoNome.focus();
});

// Inicialização: recupera os dados e monta a interface.
carregarProdutos();
atualizarInterface();
```

### 4. Como executar

1. Crie uma pasta chamada `cadastro-produtos`.
2. Dentro dela, crie os arquivos `index.html`, `style.css` e `script.js`.
3. Copie cada trecho para seu respectivo arquivo.
4. Abra o `index.html` no navegador. Também é possível utilizar a extensão Live Server do VS Code.
5. Cadastre produtos, atualize a página e confira que os dados continuam disponíveis.

### 5. Relação com os requisitos funcionais

| Requisito | Implementação |
|---|---|
| RF01 — Cadastrar produto | Evento `submit`, criação de `novoProduto` e `produtos.push(novoProduto)`. |
| RF02 — Validar campos | Verificações de nome vazio, preço numérico maior que zero e quantidade inteira não negativa. |
| RF03 — Armazenar produtos | Vetor JavaScript `produtos`, composto por objetos. |
| RF04 — Listar produtos | Função `atualizarInterface()`, que percorre o vetor e cria linhas na tabela. |
| RF05 — Contar produtos | `produtos.length`, apresentado em `totalProdutos`. |
| RF06 — Calcular estoque | Laço `for` que soma `produto.preco * produto.quantidade`. |
| RF07 — Persistir dados | `JSON.stringify()` e `localStorage.setItem()`. |
| RF08 — Recuperar dados | `localStorage.getItem()`, `JSON.parse()` e chamada de `carregarProdutos()` na inicialização. |

### 6. Conferência com os valores de referência

Com os produtos apresentados no enunciado:

| Produto | Preço | Quantidade | Subtotal |
|---|---:|---:|---:|
| Notebook | R$ 3.500,00 | 5 | R$ 17.500,00 |
| Mouse | R$ 80,00 | 10 | R$ 800,00 |
| Teclado | R$ 150,00 | 3 | R$ 450,00 |
| **Total** |  | **3 produtos** | **R$ 18.750,00** |

**Observação importante:** o desenho de referência do enunciado mostra `R$ 18.050`, mas esse valor não corresponde aos dados listados. A soma correta é `3.500 × 5 + 80 × 10 + 150 × 3 = 18.750`. A aplicação calcula o total matematicamente a partir dos produtos cadastrados e, portanto, exibirá **R$ 18.750,00** para esses três registros.

---

# Conclusão

A atividade percorre a construção de páginas com HTML e CSS, a lógica de programação com JavaScript, a manipulação de arrays e objetos, a conversão de dados para JSON, a interação com o DOM e o armazenamento persistente no navegador. No desafio final, esses conteúdos são integrados em uma aplicação que cadastra, valida, lista e calcula o valor dos produtos, mantendo os dados após a atualização da página.

**Fonte do enunciado:** [Lista de Exercícios 08 — Master Class de Programação Web](https://github.com/JoaoChoma/sistemas_web_2026/blob/main/atividades/atividade08_master_class_programacao_web.md).
