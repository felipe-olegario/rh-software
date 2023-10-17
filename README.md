Olá, eu sou o Felipe e desenvolvi este projeto, o qual consiste em uma plataforma para o setor de Recursos Humanos poder atualizar o registro de ponto dos colaboradores, assemelhando-se a um registro de ponto manual. Utilizei o Nest.js por facilitar o desenvolvimento, já possuir um padrão de projeto pré-definido e permitir uma integração fácil com o banco de dados Neo4j.Implementei o swagger também nesse projeto, para acessar o swagger rode o projeto e acesse a porta http://localhost:3000/api.

Para o front-end, utilizei Vue 3 com Vuetify seguindo orientações.

## Para executar a API:

```
# npm
npm install

// Configurar a imagem docker do neo4j no seu dispositivo
npm run db:init

npm run start:dev

```

Este banco de dados não possui um índice de usuário criado, o que permite a criação de mais de um usuário com o mesmo CPF. Para criar o índice, acesse NEO4J_HOST e execute o comando abaixo:

```
NEO4J_HOST
http://localhost:7474/

QUERY
CREATE CONSTRAINT FOR (u:User) REQUIRE u.cpf IS UNIQUE
```

## Para executar o front:

```
# npm
npm install

npm run dev
```

