# 🛒 Gerenciamento de Produtos

O **Gerenciamento de Produtos** é uma aplicação web desenvolvida com **React**, **Node.js**, **Express** e **PostgreSQL**, criada como projeto de estudos em desenvolvimento web. A aplicação permite ao usuário cadastrar, visualizar, editar e excluir produtos, além de realizar buscas por nome e validar os dados informados.

O projeto possui um **Front-End desenvolvido em React** e um **Back-End estruturado como uma API REST**, responsável pela comunicação com o banco de dados PostgreSQL.

## 📋 Funcionalidades

- Cadastro de produtos;
- Validação dos dados do formulário;
- Listagem de produtos;
- Busca de produtos pelo nome;
- Edição de produtos existentes;
- Exclusão de produtos;
- Operações CRUD;
- Integração entre Front-End e Back-End;
- Persistência dos dados utilizando PostgreSQL;
- Mensagens de sucesso e erro;
- Tratamento de erros;
- Interface responsiva.

## 🚀 Tecnologias Utilizadas

### Front-End

- React
- JavaScript (ES6+)
- Vite
- Axios
- CSS3

### Back-End

- Node.js
- Express
- PostgreSQL
- REST API

### Ferramentas

- Git
- GitHub
- Visual Studio Code

## 📂 Estrutura do Projeto

O projeto está dividido em dois repositórios:

### Front-End

```text
frontend-produtos/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### Back-End

```text
api-produtos/
│
├── controllers/
│   └── produtos.controller.js
│
├── database/
│   └── connection.js
│
├── middlewares/
│   ├── error.middleware.js
│   └── produtos.middlewares.js
│
├── routes/
│   └── produtos.routes.js
│
├── services/
│   └── produtos.service.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Como Executar o Projeto

### Clone os repositórios

#### Front-End

```bash
git clone https://github.com/Pedro312777/frontend-produtos.git
```

#### Back-End

```bash
git clone https://github.com/Pedro312777/api-produtos.git
```

### Execute o Back-End

Entre na pasta do Back-End:

```bash
cd api-produtos
```

Instale as dependências:

```bash
npm install
```

Configure o banco de dados PostgreSQL e as variáveis de ambiente necessárias.

Depois, execute:

```bash
node server.js
```

A API será executada na porta `3000`.

### Execute o Front-End

Entre na pasta do Front-End:

```bash
cd frontend-produtos
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O Vite disponibilizará a aplicação em um endereço local, normalmente:

```text
http://localhost:5173/
```

## 🎯 Objetivo do Projeto

O objetivo deste projeto foi colocar em prática conhecimentos de desenvolvimento web, integrando **Front-End, Back-End e banco de dados** em uma aplicação completa.

Durante o desenvolvimento, foram praticados conceitos de **React, Node.js, Express, Axios, PostgreSQL, APIs REST, CRUD, validação de dados e tratamento de erros**.

## 👨‍💻 Autor

**José Pedro da Silva Morais**

🎓 Graduado em Análise e Desenvolvimento de Sistemas.

---

## 📫 Contato

- LinkedIn: https://www.linkedin.com/in/josepedro-dev/
- Email: josepedrointeligencia@gmail.com

---

⭐ Caso tenha gostado do projeto, deixe uma estrela nos repositórios!
