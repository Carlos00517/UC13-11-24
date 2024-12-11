# API de Carros - webAPI

Está é uma API RESTful desenvolvida para o gerenciamento de informações de carros, utilizando **Node.js** e **Express**. 
A API permite criar, ler, atualizar e excluir carros, com validação dos dados utilizando a biblioteca **Joi**.

Este é um projeto inical de CRUD (Crrate, Read, Update, Delete), que sera expandido no futuro. Esse é apenas o escopo incial.

## Funcionalidades 

- **GET /**: Retorna a lista completa de carros.
- **GET /: sigla**: Retorna as informações  de um carro especifico, identidicado pela sigla
- **POST /**: Adiciona um noco carro á lista.
- **PUT /: sigla**: Ataliza as informações de um carro especifico,identificado pela sigla.
- **DELETE /:sigla**: Remove um carro especifico pela sigla. 

## Estrutura do projeto

- **app.js**: Arquivo principal que configura i servidor Express e as rotas da API
- **tabelacarros.js**: Contém a kusta de carros (dados fictícios).
- **validacao.js**: Contém as validações Joi para os dados dos carros

## Endpoints

###1.  **Get /**

Retorna a lista completa de carros disponíveis.

#### Exemplo de Respostas:

```joi
[
  {
    "nome": "Ferrari",
    "sigla": "Fer",
    "VelocidadeMaxima": 340,
    "Potencia": 800,
    "consumo ":5.5,
    "aceleracao": 2.9,
    "preco": 30000
  },
]
...