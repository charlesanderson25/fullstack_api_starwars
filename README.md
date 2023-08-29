<h1 align="center"> Pesquise seu personagem - Star Wars </h1>

<p align="center">
  <img src="https://github.com/charlesanderson25/fullstack_api_starwars/assets/54293151/942591ad-4868-437a-95f3-a77bda7ec752" alt="Imagem">
</p>

Criação de uma API REST para integração com a API do StarWars, com uma tela de interface.

O sitema utiliza o Redis como um In Memory Database. Esse banco de dados não tem suporte para Windows, caso o usuário utilize apenas esse sistema operacional, é necessário baixar o WSL: https://redis.io/docs/getting-started/installation/install-redis-on-windows/

Esse Readme trata apenas do Backend, a aplicação também é composta de um sistema Frontend. 

Para instruções do Frontend siga para o diretório: https://github.com/charlesanderson25/fullstack_api_starwars_front-end.git

# :hammer: Funcionalidades do projeto

API composta por rotas que fazem:

- Integração com a SWAPI, a API do Star Wars
- Rota para pesquisa de personagens, orientando-se pela documentação da SWAPI na aba Searching
- Rota para adicionar ou remover favoritos

<h3 align="center"> Status do Projeto </h3> 

> :factory: Projeto em produção :factory:

# 📁 Acesso ao projeto

**Para acessar o código fonte do projeto, você deve cloná-lo através do repositório no GitHub: https://github.com/charlesanderson25/fullstack_api_starwars **

# 🛠️ Abrir e rodar o projeto

Esse é um projeto Node.Js construído através da biblioteca Express, utilizando o In Memory Banco de Dados, Redis: https://redis.io/

Para rodar o projeto, é necessário

Instalação dos módulos, dependências e bibliotecas utilizadas no projeto, como o express, por exemplo. 
<br><strong>npm install</strong></br> 
<br><strong>npm install axios</strong></br> 
<br><strong>npm install cors</strong></br> 
<br><strong>npm install express</strong></br> 
<br><strong>npm install --save-dev nodemon</strong></br>

Instalar e fazer a conexão do Redis conforme instruções em sua documentação: https://redis.io/docs/getting-started/installation/install-redis-on-windows/

Após instalar todas as dependências, você poderá rodar o servidor e inicar o Frontend.

<h3 align="center"> Técnicas e Tecnologias Utilizadas </h3> 

- Node.Js
- Javascript
- Redis
- Paradigma Funcional
- Express
- Cors

# Autores
 
<img loading="lazy" src="https://avatars.githubusercontent.com/u/54293151?v=4" width=115><br><sub> 
