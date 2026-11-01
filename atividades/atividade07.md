# Lista de Exercícios 07 — Programação Web

**Resolução completa — HTML, CSS, Bootstrap e JavaScript**

> Os exemplos foram organizados por exercício e podem ser copiados para arquivos `.html`, `.css` e `.js`, conforme indicado. Quando um exercício pede uma página, foi incluído um exemplo funcional. Substitua textos, imagens e dados de demonstração conforme necessário.

> **Observação sobre a numeração:** o enunciado publicado pelo professor passa do exercício 25 para o exercício 28. Portanto, esta resolução mantém a numeração original e não cria exercícios 26 e 27.

---

# Parte 1 — HTML e CSS

## 1. Estrutura HTML

**Exemplo de página:**

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
    <p>Esta é minha primeira página HTML.</p>
</body>
</html>
```

**Explicação:**

- `<!DOCTYPE html>` informa ao navegador que o documento utiliza HTML5.
- `<html>` é o elemento raiz que contém toda a página.
- `<head>` guarda metadados e configurações da página, como codificação de caracteres, título, responsividade e links para arquivos CSS. Seu conteúdo não é exibido diretamente na área principal da página.
- `<meta charset="UTF-8">` permite representar corretamente caracteres especiais, como acentos.
- `<title>` define o título exibido na aba do navegador.
- `<body>` contém os elementos que aparecem para o usuário, como textos, imagens, links e formulários.

## 2. Tags HTML

**Exemplo de página utilizando todas as tags solicitadas:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de tags HTML</title>
</head>
<body>
    <h1>Programação Web</h1>

    <h2>O que é HTML?</h2>
    <p>HTML é uma linguagem de marcação utilizada para estruturar páginas web.</p>

    <h2>Tecnologias utilizadas</h2>
    <p>HTML, CSS e JavaScript são tecnologias fundamentais para o desenvolvimento web.</p>
    <p>Com elas, podemos criar páginas estruturadas, estilizadas e interativas.</p>

    <img src="https://placehold.co/400x200" alt="Imagem ilustrativa de exemplo">

    <p>Consulte também a documentação do
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML na MDN</a>.
    </p>

    <h2>Etapas para criar uma página</h2>
    <ol>
        <li>Definir a estrutura HTML.</li>
        <li>Adicionar os estilos CSS.</li>
        <li>Implementar interações com JavaScript.</li>
    </ol>

    <h2>Tecnologias web</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
</body>
</html>
```

**Explicação:** `h1` representa o título principal; `h2`, os subtítulos; `p`, os parágrafos; `img`, uma imagem; `a`, um link; `ol`, uma lista ordenada; `ul`, uma lista não ordenada; e `li`, cada item de uma lista.

## 3. Página de perfil

A página abaixo apresenta uma pessoa, uma foto, uma descrição, tecnologias e links para redes sociais. A imagem é um arquivo local de exemplo: coloque uma foto chamada `perfil.jpg` na mesma pasta do HTML ou altere o caminho no atributo `src`.

**Arquivo `perfil.html`:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu perfil</title>
    <link rel="stylesheet" href="perfil.css">
</head>
<body>
    <main class="perfil">
        <header>
            <img class="foto-perfil" src="perfil.jpg" alt="Foto de perfil">
            <h1>Seu Nome</h1>
            <p class="descricao">Estudante de Engenharia de Software interessado em desenvolvimento web e tecnologia.</p>
        </header>

        <section aria-labelledby="tecnologias">
            <h2 id="tecnologias">Tecnologias</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
            </ul>
        </section>

        <nav aria-label="Redes sociais">
            <h2>Redes sociais</h2>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
    </main>
</body>
</html>
```

**Arquivo `perfil.css`:**

```css
body {
    margin: 0;
    padding: 30px;
    font-family: Arial, sans-serif;
    background-color: #f2f4f8;
}

.perfil {
    max-width: 600px;
    margin: 0 auto;
    padding: 25px;
    background-color: white;
    border-radius: 12px;
    text-align: center;
}

.foto-perfil {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
}

.descricao {
    color: #555;
}

section ul {
    display: inline-block;
    text-align: left;
}

nav a {
    display: inline-block;
    margin: 5px;
    color: #1557a0;
}
```

**Elementos semânticos utilizados:** `main` identifica o conteúdo principal; `header` representa o cabeçalho; `section` agrupa um conteúdo relacionado; e `nav` identifica uma área de navegação.

## 4. Formulário

**Exemplo de formulário de cadastro:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>
    <h1>Cadastro de aluno</h1>

    <form action="#" method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>
        <br><br>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
        <br><br>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required minlength="6">
        <br><br>

        <label for="curso">Curso:</label>
        <select id="curso" name="curso" required>
            <option value="">Selecione um curso</option>
            <option value="engenharia-software">Engenharia de Software</option>
            <option value="ciencia-computacao">Ciência da Computação</option>
            <option value="sistemas-informacao">Sistemas de Informação</option>
        </select>
        <br><br>

        <label for="observacoes">Observações:</label>
        <textarea id="observacoes" name="observacoes" rows="4" cols="30"></textarea>
        <br><br>

        <button type="submit">Cadastrar</button>
    </form>
</body>
</html>
```

**Explicação:** `form` agrupa os campos e define o envio; `label` identifica cada campo; `input` recebe dados; `select` e `option` permitem escolher uma opção; `textarea` recebe um texto maior; e `button` cria o botão de cadastro. O atributo `for` do `label` deve corresponder ao `id` do campo.

## 5. CSS externo

O código:

```html
<link rel="stylesheet" href="style.css">
```

conecta um arquivo CSS externo chamado `style.css` ao documento HTML. O atributo `rel="stylesheet"` indica que o arquivo é uma folha de estilos, enquanto `href` informa o caminho até esse arquivo.

**Por que HTML e CSS normalmente são separados?**

O HTML fica responsável pela estrutura e pelo conteúdo da página, enquanto o CSS define sua aparência, como cores, fontes, espaçamentos e posicionamento. Separá-los facilita a manutenção, permite reutilizar estilos em várias páginas e deixa o código mais organizado.

## 6. Classe e ID

**HTML fornecido:**

```html
<h1 id="titulo">Programação Web</h1>
<p class="destaque">HTML</p>
<p class="destaque">CSS</p>
```

**CSS:**

```css
#titulo {
    text-align: center;
}

.destaque {
    color: #ffffff;
    background-color: #2563eb;
    padding: 8px;
    font-weight: bold;
}
```

**Diferença entre `#titulo` e `.destaque`:**

- `#titulo` seleciona um elemento pelo seu `id`. O identificador deve ser único na página.
- `.destaque` seleciona todos os elementos que possuem a classe `destaque`. Uma mesma classe pode ser utilizada em vários elementos.

No CSS, `#` representa um seletor de ID e `.` representa um seletor de classe.

## 7. Card

**HTML:**

```html
<div class="card-produto">
    <img src="https://placehold.co/300x180" alt="Imagem do produto">
    <h2>Fone de ouvido</h2>
    <p>Fone de ouvido com conexão Bluetooth e bateria de longa duração.</p>
    <p class="preco">R$ 149,90</p>
    <button type="button">Comprar</button>
</div>
```

**CSS:**

```css
.card-produto {
    width: 280px;
    padding: 20px;
    margin: 30px auto;
    border: 1px solid #cccccc;
    border-radius: 12px;
    text-align: center;
    font-family: Arial, sans-serif;
}

.card-produto img {
    width: 100%;
    border-radius: 8px;
}

.card-produto .preco {
    font-size: 20px;
    font-weight: bold;
}

.card-produto button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background-color: #2563eb;
    color: white;
}
```

**Propriedades utilizadas:** `width` define a largura; `padding` cria espaço interno; `margin` cria espaço externo; `border` define a borda; `border-radius` arredonda os cantos; e `text-align` define o alinhamento do texto.

## 8. Hover

Para fazer o botão mudar de aparência quando o mouse passar sobre ele, adicione ao CSS do exercício anterior:

```css
.card-produto button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background-color: #2563eb;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

.card-produto button:hover {
    background-color: #1e40af;
    color: #ffffff;
    transform: scale(1.05);
}
```

**Explicação:** `:hover` aplica estilos quando o cursor está sobre o botão; `background-color` altera a cor de fundo; `color` define a cor do texto; `cursor: pointer` mostra o cursor de seleção; e `transition` suaviza a mudança de aparência.

## 9. Centralização

**HTML:**

```html
<div class="container-centralizado">
    <div class="conteudo">
        <h1>Conteúdo centralizado</h1>
        <p>Esta div está no centro da tela.</p>
    </div>
</div>
```

**CSS:**

```css
.container-centralizado {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

**Explicação:**

- `display: flex` transforma o elemento em um contêiner flexível.
- `justify-content: center` centraliza os itens no eixo principal. Como a direção padrão é linha (`row`), isso centraliza horizontalmente.
- `align-items: center` centraliza os itens no eixo transversal, neste caso, verticalmente.
- `min-height: 100vh` define uma altura mínima igual a 100% da altura da área visível do navegador. A unidade correta é `vh`, sem espaço entre o número e a unidade.

## 10. Flexbox

**HTML:**

```html
<div class="caixas">
    <div class="caixa">Caixa 1</div>
    <div class="caixa">Caixa 2</div>
    <div class="caixa">Caixa 3</div>
</div>
```

**CSS:**

```css
.caixas {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
}

.caixa {
    flex: 1;
    padding: 30px;
    background-color: #2563eb;
    color: white;
    text-align: center;
    border-radius: 8px;
}
```

As três caixas ficam lado a lado. `display: flex` ativa o Flexbox; `justify-content` distribui os itens horizontalmente; `align-items` controla o alinhamento no eixo transversal; e `gap` define o espaço entre as caixas.

## 11. Menu

**HTML:**

```html
<nav class="menu">
    <a href="#inicio">Início</a>
    <a href="#sobre">Sobre</a>
    <a href="#servicos">Serviços</a>
    <a href="#contato">Contato</a>
</nav>
```

**CSS:**

```css
.menu {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 15px;
    background-color: #222222;
}

.menu a {
    padding: 10px 16px;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;
}

.menu a:hover {
    background-color: #2563eb;
}
```

O `nav` representa a área de navegação. O Flexbox organiza os links na horizontal, `border-radius` arredonda os cantos dos links e `:hover` altera a cor quando o mouse passa sobre eles.

## 12. CSS Grid

**HTML:**

```html
<div class="grade">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
</div>
```

**CSS:**

```css
.grade {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
}

.grade div {
    padding: 25px;
    background-color: #2563eb;
    color: white;
    text-align: center;
    font-size: 20px;
}
```

**Explicação:** `display: grid` ativa o CSS Grid. `grid-template-columns: repeat(3, 1fr)` cria três colunas de mesma proporção. A função `repeat(3, 1fr)` repete três vezes a definição de uma fração (`1fr`), dividindo o espaço disponível igualmente entre as três colunas. `gap: 8px` define o espaçamento entre as células.

## 13. Bootstrap

**Finalidade:** Bootstrap é um framework CSS que disponibiliza componentes e estilos prontos, além de um sistema de grid responsivo. Ele facilita a criação de interfaces consistentes e adaptáveis a diferentes tamanhos de tela.

**Função das classes:**

- `container`: cria uma área de conteúdo com largura ajustável e espaçamento lateral.
- `row`: cria uma linha para organizar colunas no sistema de grid.
- `col`: define uma coluna que ocupa uma parte do espaço disponível.
- `btn`: aplica o estilo básico de botão.
- `btn-primary`: aplica a aparência de botão principal do Bootstrap.
- `card`: cria um componente de cartão para agrupar conteúdo, como imagem, título e descrição.

**Exemplo de utilização:**

```html
<div class="container">
    <div class="row">
        <div class="col">
            <div class="card p-3">
                <h2 class="card-title">Meu card</h2>
                <p class="card-text">Exemplo de componente Bootstrap.</p>
                <button class="btn btn-primary" type="button">Ver mais</button>
            </div>
        </div>
    </div>
</div>
```

Para utilizar as classes, é necessário incluir o CSS do Bootstrap na página, como mostrado no exercício seguinte.

## 14. Bootstrap responsivo

Os três cards abaixo aparecem lado a lado em telas médias ou grandes e ficam empilhados em telas pequenas. A classe `col-12` ocupa toda a largura em telas pequenas, enquanto `col-md-4` ocupa um terço da linha a partir do breakpoint `md`.

**Página completa:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cards responsivos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <main class="container py-4">
        <h1 class="text-center mb-4">Produtos</h1>

        <div class="row g-3">
            <div class="col-12 col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title h5">Produto 1</h2>
                        <p class="card-text">Descrição do primeiro produto.</p>
                        <a href="#produto1" class="btn btn-primary">Ver produto</a>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title h5">Produto 2</h2>
                        <p class="card-text">Descrição do segundo produto.</p>
                        <a href="#produto2" class="btn btn-primary">Ver produto</a>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title h5">Produto 3</h2>
                        <p class="card-text">Descrição do terceiro produto.</p>
                        <a href="#produto3" class="btn btn-primary">Ver produto</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
```

**Explicação:** `container` centraliza e limita a largura do conteúdo; `row` cria a linha; `col-12` faz cada card ocupar uma linha inteira em telas pequenas; `col-md-4` divide o espaço em três colunas a partir do breakpoint médio; `g-3` define o espaçamento; `card` cria o cartão; e `h-100` mantém os cards com a mesma altura dentro da linha. O CSS do Bootstrap é carregado pelo link no `head`, portanto é necessário ter conexão com a internet para obtê-lo do CDN.

---

# Parte 2 — JavaScript

## 15. Variáveis

Considerando o código:

```javascript
let nome = "Carlos";
let idade = 20;
let aprovado = true;
```

**Tipos das variáveis:**

- `nome`: String, pois armazena um texto.
- `idade`: Number, pois armazena um número.
- `aprovado`: Boolean, pois armazena um valor lógico (`true` ou `false`).

**Variáveis para um produto:**

```javascript
let nomeProduto = "Teclado";
let preco = 129.90;
let quantidade = 15;
let disponivel = true;
```

`nomeProduto` é String; `preco` e `quantidade` são Number; `disponivel` é Boolean.

## 16. Operadores

**Código:**

```javascript
let nota1 = 7;
let nota2 = 9;

let media = (nota1 + nota2) / 2;

console.log("Média:", media);
```

**Resultado no console:**

```text
Média: 8
```

A soma é realizada pelo operador `+`, e a divisão pelo operador `/`. A soma das notas é dividida por 2 para calcular a média.

## 17. Condicional

**Programa que recebe uma média e informa a situação do aluno:**

```javascript
let media = Number(prompt("Digite a média do aluno:"));

if (Number.isNaN(media)) {
    console.log("Digite uma média válida.");
} else if (media >= 7) {
    console.log("APROVADO");
} else {
    console.log("REPROVADO");
}
```

O programa solicita a média por meio de `prompt()`. `Number()` converte o valor recebido para número. A condição `media >= 7` verifica se a média é maior ou igual a 7. Se for verdadeira, mostra `APROVADO`; caso contrário, mostra `REPROVADO`. A verificação com `Number.isNaN()` trata uma entrada que não seja numérica.

## 18. IF / ELSE IF / ELSE

**Programa para classificar uma nota:**

```javascript
let nota = Number(prompt("Digite a nota do aluno:"));

if (Number.isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Nota inválida. Digite um valor entre 0 e 10.");
} else if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
```

As condições são verificadas de cima para baixo. Primeiro, o programa valida se a nota está entre 0 e 10. Depois, verifica os limites em ordem decrescente: notas a partir de 9 são excelentes; a partir de 7 são aprovadas; a partir de 5 ficam em recuperação; e as abaixo de 5 são reprovadas.

## 19. FOR

**Código para mostrar os números de 1 a 10:**

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

**Explicação:** `let i = 1` inicia o contador em 1; `i <= 10` define a condição para continuar repetindo; e `i++` acrescenta 1 ao contador a cada repetição. Assim, são exibidos os números de 1 até 10.

## 20. Números pares

**Código para mostrar os números pares entre 0 e 20:**

```javascript
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
```

O contador começa em 0 e aumenta de 2 em 2. Dessa forma, são exibidos apenas os números pares, sem precisar testar cada número com uma condição.

**Resultado:** `0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20`.

---

# Parte 3 — Arrays

## 21. Índices

Considerando:

```javascript
let notas = [7, 5, 9, 8, 6];
```

**Respostas:**

1. `notas[0]` retorna `7`, pois o primeiro elemento de um array fica no índice 0.
2. `notas[2]` retorna `9`, pois é o terceiro elemento do array.
3. `notas.length` retorna `5`, que representa a quantidade de elementos do array.
4. Para alterar a posição 1 para 10, basta fazer:

```javascript
notas[1] = 10;
```

Após a alteração, o array fica `[7, 10, 9, 8, 6]`.

## 22. Percorrendo um array

**Código:**

```javascript
let nomes = ["Ana", "Carlos", "Maria", "João"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
```

O `for` começa no índice 0 e continua enquanto `i` for menor que `nomes.length`. A cada repetição, `i++` avança para o próximo índice. `nomes[i]` acessa e exibe o elemento da posição atual.

## 23. Selection Sort

**Código utilizando Selection Sort:**

```javascript
let numeros = [7, 3, 9, 2, 5];

for (let i = 0; i < numeros.length - 1; i++) {
    let indiceMenor = i;

    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[j] < numeros[indiceMenor]) {
            indiceMenor = j;
        }
    }

    let temporaria = numeros[i];
    numeros[i] = numeros[indiceMenor];
    numeros[indiceMenor] = temporaria;
}

console.log(numeros);
```

**Resultado:**

```text
[2, 3, 5, 7, 9]
```

**Explicação das variáveis:**

- `i`: indica a posição que receberá o menor elemento encontrado na parte ainda não ordenada do array.
- `j`: percorre as posições seguintes para procurar o menor elemento.
- `indiceMenor`: guarda o índice do menor valor encontrado durante a busca.
- `temporaria`: guarda temporariamente um valor para permitir a troca entre duas posições sem perder nenhum dos elementos.

**Funcionamento:** a cada repetição do laço externo, o algoritmo procura o menor elemento da parte não ordenada. Quando termina a busca, troca esse elemento com o elemento da posição `i`. O processo se repete até que o array esteja ordenado em ordem crescente.

---

# Parte 4 — Funções

## 24. Função

**Implementação da função `somar(a, b)`:**

```javascript
function somar(a, b) {
    return a + b;
}

console.log(somar(5, 3));
```

**Resultado:** `8`.

A função recebe dois parâmetros, `a` e `b`, soma seus valores e utiliza `return` para devolver o resultado. O `console.log()` exibe o valor retornado.

## 25. Função com condicional

**Implementação da função `verificarIdade(idade)`:**

```javascript
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarIdade(20));
console.log(verificarIdade(15));
```

**Resultado:**

```text
Maior de idade
Menor de idade
```

A função recebe a idade como parâmetro. Se o valor for maior ou igual a 18, retorna `Maior de idade`; caso contrário, retorna `Menor de idade`.

---

# Parte 5 — DOM e eventos

## 28. DOM

**HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulação do DOM</title>
</head>
<body>
    <h1 id="titulo">Programação Web</h1>
    <button id="botao" type="button">Alterar</button>

    <script>
        const titulo = document.getElementById("titulo");
        const botao = document.getElementById("botao");

        botao.addEventListener("click", function () {
            titulo.textContent = "JavaScript funcionando!";
        });
    </script>
</body>
</html>
```

**Explicação:** `document.getElementById()` procura e retorna um elemento HTML pelo seu `id`. O `addEventListener("click", ...)` registra uma função para ser executada quando o botão receber um clique. Dentro dela, `textContent` altera o texto do título para `JavaScript funcionando!`.

## 29. Eventos — Lâmpada

**Página completa:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acender e apagar lâmpada</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 30px;
        }

        img {
            display: block;
            width: 150px;
            height: auto;
            margin: 20px auto;
        }

        button {
            padding: 10px 20px;
            margin: 5px;
            border: none;
            border-radius: 6px;
            color: white;
            cursor: pointer;
        }

        #acender {
            background-color: #e6a700;
        }

        #apagar {
            background-color: #444444;
        }
    </style>
</head>
<body>
    <h1>Controle da lâmpada</h1>

    <img id="lampada" src="https://www.w3schools.com/js/pic_bulboff.gif" alt="Lâmpada apagada">

    <button id="acender" type="button">ACENDER</button>
    <button id="apagar" type="button">APAGAR</button>

    <script>
        const lampada = document.getElementById("lampada");
        const botaoAcender = document.getElementById("acender");
        const botaoApagar = document.getElementById("apagar");

        botaoAcender.addEventListener("click", function () {
            lampada.src = "https://www.w3schools.com/js/pic_bulbon.gif";
            lampada.alt = "Lâmpada acesa";
        });

        botaoApagar.addEventListener("click", function () {
            lampada.src = "https://www.w3schools.com/js/pic_bulboff.gif";
            lampada.alt = "Lâmpada apagada";
        });
    </script>
</body>
</html>
```

**Explicação do fluxo:**

```text
USUÁRIO → CLIQUE → EVENTO → FUNÇÃO → ALTERAÇÃO NO DOM
```

1. **Usuário:** a pessoa interage com a página.
2. **Clique:** a pessoa clica em um dos botões.
3. **Evento:** o navegador identifica o evento `click`.
4. **Função:** o `addEventListener()` executa a função associada ao botão clicado.
5. **Alteração no DOM:** a propriedade `src` da imagem é modificada, substituindo a imagem da lâmpada apagada pela imagem da lâmpada acesa, ou vice-versa.

As imagens são carregadas de um endereço externo; portanto, é necessária conexão com a internet para visualizá-las. Caso prefira trabalhar sem internet, baixe as duas imagens para a pasta do projeto e substitua os endereços por `pic_bulboff.gif` e `pic_bulbon.gif`.

---

# Conclusão

A lista trabalhou os principais fundamentos de desenvolvimento web. HTML foi utilizado para estruturar o conteúdo; CSS, para definir a aparência e o posicionamento; Bootstrap, para facilitar a criação de interfaces responsivas; e JavaScript, para trabalhar com variáveis, condições, repetições, arrays, ordenação, funções e manipulação do DOM por meio de eventos.

