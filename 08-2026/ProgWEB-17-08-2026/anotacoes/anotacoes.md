Sempre teremos diretórios (pastas) em nossos projetos (HTML, CSS E JAVASCRIPT(JS))
o index.html fica fora

As 3 tags que original o site.
<h1> 2, 3 , 4...
<p>
<a>
<img>
<form>

---------------------------------------------------------------------------------
Body: Tudo o conteúdo que eu quero mostar no meu site.
Head: Modificação do conteído do body tanto em estilo quanto em programação.

---------------------------------------------------------------------------------
Nesse link:
<a href="html/conteudo_de_casa.html">Link</a>
esse é o caminho relativo, o sistema pega de onde eu estou e redireciona

se estiver:
<a href="/html/conteudo_de_casa.html">Link</a>
é o caminho real, eu tenho que dizer o caminho completo

----------------------------------------------------------------------------------

Para voltar podemos utilizar:
<a href="../index.html">Voltar</a>

----------------------------------------------------------------------------------

Para criar formulário:
<form>
    <label for="nome">Nome:</label>
    <input type="text" name="nome" id="nome">
</form>

As labels são os campos e o input é como será preenchido

----------------------------------------------------------------------------------

3 formas de estilizar
- Arquivo: EStilo em cascata, utiliza a tag link. Link do CSS (Fica dentro do Head do index)
Tudo do meu site pode ser estilizado, pois estão dentro do DOM. Cada tag tem/é um nome para que possa ser utilizado para referenciar. Utilizamos essa referencia para estilizar ou implementar(Programar).