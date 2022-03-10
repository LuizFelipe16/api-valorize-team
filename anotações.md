## Sequence Create

mkdir project

``yarn init -y``

``yarn add typescript -D``

``yarn tsc --init``

in archive tsconfig {
  strict: false,     
}

``yarn add express``

mkdir src

mkfile server

in archive server {
  import express
  declare app const instance
  listen
}

``yarn add @types/express -D``

``yarn add ts-node-dev -D``

in archive package {
  "dev": "ts-node-dev src/server.ts"
}

``yarn add typeorm reflect-metadata sqlite3``

in file server.ts import reflect meta data

create file ormconfig

create past database

create index.ts connection in database past

in file server.ts import index.ts to database past

in file orm config add cli / path migrations

create typeorm command

create tables = yarn typeorm migration:create -n `Create${"name-table"}`

in file ormconfig add migrations path

``yarn typeorm migration:run``

for create entitys automatic, in ormconfig add entitiesDir path, and use command:
yarn typeorm entity:create -n `name-entity`

create entity User

``yarn add uuid``

in entities, file User add generated uuid

create past repositories

create file UserRepository

create services User

create controllers User

create routes in core

add errors treatment

``yarn add bcryptjs + @types``

encrypt password user

`yarn add jsonwebtoken`

create service user authenticate, method sign

verify user exists, if exists equals true, verify password user correct, generated token

generated auth-secret = md5 hash generator

*add the compliments and tags (repositories, controllers, services, migrations and entities)*

create middleware authenticated

add new @types of express in request (user_id)

edit ensure admin, receive user_id and verify user admin

add in routes middlewares admin and authenticated

add list compliments

in list compliments receive, add find getting relations with others tables

``yarn add class-transformer``

in entity Tag, edit file putting @Expose for to transform the attribute name

## Aprendizados

- Método PATCH: Alterar uma informação específica;

- Insomnia: BaseURL;

- Routes Params é obrigatório e os Query Params;

- ORM Mapeia a Table e transforma em objeto, e também facilita os scripts de manipulação do BD;
Diferente do Knex, ele tem métodos mais específicos e mais variedade.

- Migrations: Controle de versão das tabelas da aplicação

- Entidades: Entidades referenciam tabelas no BD; Quando a aplicação requisitar a entidade user, o ORM vai buscar a tabela que está sendo referenciada; Assim tudo que é referente na entidade, está na tabela BD.

- Repositorios: Uma ponte/camada de comunicação entre a entidade e o banco de dados para manipulação
da tabela do BD.

- Service: Requisições ao BD;

- JWT: Token para facilitar requsições de autenticação; Payload são informações que serão passadas pro
frontend, a questão é não ter nada sensível ali, tipo senha;

- Refrehs Token: O usuário não precisa passar os dados sempre e a própria app faz um novo token;

- Error FOREIGN KEY constraint failed: A chave que está sendo inserida não existe na tabel origem;

- About Middlewares: Podemos passar vários middlewares nas rotas, vários processos, por exemplo,
fazendo validações.


## Regras

# NLW Valoriza

## Regras

- Cadastro de usuários:

  - `Não` é permitido cadastrar mais de um usuário com o mesmo email;

  - `Não` é permitido cadastrar usuário sem e-mail.

- Cadastro de TAGs:

  - `Não` é permitido cadastrar mais de uma tag com o mesmo nome;

  - `Não` é permitido cadastrar tag sem nome;

  - `Não` é permitido o cadastro por usuários que não sejam administradores.

- Cadastro de elogios:

  - `Não` é permitido um usuário cadastrar um elogio para si;

  - `Não` é permitido cadastrar elogios para usuários inválidos;

  - O usuário precisa estar autenticado na aplicação.
  
- *Aprimoramentos:*

  - Envio de e-mails;

  - Criação do frontend;

  - Implementar SOLID;

  - Utilizar POSTGREE - No ormconfig mudar pro prostgree (está no site typeorm = useORM), instalar o drive do BD;

  - Adicionar módulos de errors;