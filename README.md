Olá, eu sou o Felipe e desenvolvi este projeto que consiste em uma plataforma para o RH conseguir atualizar o registro de ponto dos colaboradores, como se fosse um registro de ponto manual. Utilizei o nest por facilitar o desenvolvimento, ja ter um padrão de projeto ja pré definido e facil integração com o banco de dados neo4j.

Para o front eu usei vue 3 com vuetify seguindo orientações.

## Para rodar a API:

```
# npm
npm install

npm run db:init

npm run start:dev

```

Este banco de dados não está com o index do usuário criado permitindo criar mais de um usuario com o mesmo CPF, para criar o index acessar NEO4J_HOST e executar o comando abaxio:

http://localhost:7474/


```
NEO4J_HOST
http://localhost:7474/

QUERY
CREATE CONSTRAINT FOR (u:User) REQUIRE u.cpf IS UNIQUE
```

## Para rodar o front:

```
# npm
npm install

npm run dev
```

