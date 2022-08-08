# Desafio-frexco 
<h2>
<a id="user-content--sobre-o-projeto" class="anchor" aria-hidden="true" href="#sobre-o-projeto"> </a>
<g-emoji class="g-emoji" alias="computer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png">💻</g-emoji>
 Sobre o projeto
</h2>

<p>
Ecommerce de hortifruti desenvolvido com React e Javascript onde é possível visualizar os produtos disponíveis e o carrinho.
</p>

<p>
Os usuários podem adicionar frutas que possuem nome, id, preço e informações nutricionais. Os preços são fictícios e foram setados por meio do id de cada frutas.
Os dados das frutas foram coletados da seguinte API: https://www.fruityvice.com/api/fruit/all. Isso foi feito por intermédio de um servidor NODE JS disponível no back-end da aplicação. O front end se comunica com o back end armazenando os dados coletados em estados através do Hook UseEffect.
</p>

<p>
 Na barra de navegação é mostrado a quantidade de itens no carrinho e é possível acessá-lo clicando nele e voltar para a home clicando de volta.
</p>
<p>
 Na listagem de produtos é possível visualizar os itens disponíveis com o nome e o preço de cada um.
</p>
 No carrinho (menu lateral) é disponibilizado os produtos selecionados com o devido nome, a quantidade e as informações nutricionais, além do preço total da compra. Nesse caso há também a opção de remover cada item e os itens adicionados vão sendo atualizados automaticamente no carrinho.
</p>

<h2>
<a id="user-content--layout" class="anchor" aria-hidden="true" href="#-layout"></a>
<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
<g-emoji class="g-emoji" alias="art" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png">🎨</g-emoji>
 Layout
</h2>
<h3>
 <a id="user-content-mobile" class="anchor" aria-hidden="true" href="#mobile"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
Listagem de produtos
</h3>
<p align="center"> 
<a href="https://ibb.co/8gMSKHn"><img src="https://i.ibb.co/zVs0nzW/listagem-de-produtos.png" alt="listagem-de-produtos" border="0"></a>
</p>

<h3>
 <a id="user-content-mobile" class="anchor" aria-hidden="true" href="#mobile"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
Carrinho
</h3>
<p align="center"> 
<a href="https://ibb.co/PTyTVC9"><img src="https://i.ibb.co/ZHrHbTY/Carrinho.png" alt="Carrinho" border="0"></a>
</p>

<h2>
<a id="user-content--tecnologias" class="anchor" aria-hidden="true" href="#-tecnologias"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
<g-emoji class="g-emoji" alias="hammer_and_wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png">🛠</g-emoji>
 Tecnologias
</h2>
<p> As seguintes linguagens foram usadas na construção do projeto:</p>
<ul>
 <li> Html </li>
 <li> Css / Bootstrap </li>
 <li> React JS</li>
 <li> Javascript </li>
  <li> Node JS </li>
</ul>

<h2>
<a id="user-content--como-executar-o-projeto" class="anchor" aria-hidden="true" href="#-como-executar-o-projeto"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji>
Como executar o projeto
</h2>
<p> Para executar o projeto basta clonar o repositório executando no terminal:
 <code> git clone https://github.com/renanmdreis45/desafio-frexco </code>
</p>
<p>
Em seguida, basta abrir o projeto na sua IDE rodar primeiramente o servidor node, selecionando a pasta back-end com cd back-end e digitando em um dos terminais node server.js. Após isso digite cd front-end no outro terminal e execute com npm start
</p>
<h2 dir="auto"><a id="user-content--como-contribuir-para-o-projeto" class="anchor" aria-hidden="true" href="#-como-contribuir-para-o-projeto"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
<g-emoji class="g-emoji" alias="+1" fallback-src="">:+1:</g-emoji>
Como contribuir para o projeto
</h2>
<ol>
<li>Faça um <strong>fork</strong> do projeto.</li>
<li>Crie uma nova branch com as suas alterações: <code>git checkout -b my-feature</code></li>
<li>Salve as alterações e crie uma mensagem de commit contando o que você fez: <code>git commit -m "feature: My new feature"</code></li>
<li>Envie as suas alterações: <code>git push origin my-feature</code></li>
</ol>
<h2 dir="auto">
<a id="user-content--licença" class="anchor" aria-hidden="true" href="#-licença"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
 <g-emoji class="g-emoji" alias="memo" fallback-src="">📝</g-emoji> Autoria
</h2>
Feito por Renan Martins 👋
<p> <a href="https://www.linkedin.com/in/renanmdreis/"> Entre em contato </a> </p>
