
# EnaFood

A API EnaFood é um sistema de delivery que permite aos usuários colocar produtos na sacola e escolher a forma de pagamento e endereço de entrega. Esta API foi projetada em NodeJS com banco de dados MongoDB.

O objetivo desta API é fornecer um serviço de delivery eficiente e escalável que possa atender às necessidades de um grande número de usuários em diferentes fases do projeto.

### Como executar o projeto

#### Você precisa ter o Docker e Docker Compose instalados

1. Clone o repositório em sua máquina local  -  `git clone git@github.com:mateussousaa/EnaFood.git`
2. Entre na pasta do repositório que você acabou de clonar  -  `cd EnaFood`
3. Execute `npm install` para instalar as dependências
4. Renomeie o arquivo .env.example para .env  -  `mv .env.example .env`
<details>

  <summary>5. Caso tenha o MongoDB instalado mude a porta no Docker Compose</summary>
  
  <br>
  
  - 5.1. Dentro do arquivo docker-compose.yml mude o ports para `NOVA_PORTA:27017` sendo a primeira porta a que você deseja utilizar
  
  <br>
  
  - 5.2. Mude no arquivo .env a variável `IP_ADDRESS=localhost:NOVA_PORTA`
  
</details>

<br>

6. Suba o Docker Compose com o comando  -  `docker-compose up -d`

<br>

7. Execute `npm start` para iniciar o servidor localmente

### Tecnologias utilizadas
Para implementar a API do EnaFood, foram utilizadas as seguintes tecnologias:

- Node.js: uma plataforma de desenvolvimento de software em JavaScript para construir aplicativos de rede escaláveis;
- MongoDB: um banco de dados NoSQL de código aberto e orientado a documentos;
- Express: um framework para Node.js que fornece recursos para construir aplicativos da Web;
- Joi: uma biblioteca de validação de dados para JavaScript;
- Jsonwebtoken: uma biblioteca para gerar e verificar tokens JWT (JSON Web Tokens);
- Mocha: um framework de teste JavaScript para programas Node.js;
- Chai: uma biblioteca de asserção para testes em Node.js;
- Sinon: uma biblioteca de testes de espionagem, stubs e mocks para JavaScript.

### Fases do projeto
O projeto foi dividido em quatro fases, de acordo com a escala e a complexidade do sistema de delivery:

- MVP: Nesta fase, o EnaFood possui apenas cerca de 100 usuários que fazem cerca de 5 pedidos por mês, com cada pedido contendo de 1 a 5 produtos.
- Early adopters: Nesta fase, o EnaFood possui cerca de 10.000 usuários que fazem cerca de 10 pedidos por mês, com cada pedido contendo de 1 a 15 produtos.
- Early majority: Nesta fase, o EnaFood possui cerca de 1.000.000 usuários que fazem cerca de 25 pedidos por mês, com cada pedido contendo de 1 a 20 produtos.
- Late majority: Nesta fase, o EnaFood é um sucesso e é a principal rede de delivery do Brasil, com cerca de 50.000.000 de usuários que fazem cerca de 30 pedidos por mês, com cada pedido contendo de 1 a 20 produtos. Há também um novo módulo de atendimento de empresas, que permite pedidos ainda maiores a preços mais acessíveis.

### Funcionalidades da API

- Obter os produtos disponíveis para compra
- Manipular a sacola de compras dos usuários (adicionar, escolher quantidades, remover...)

### Entregáveis
- Os seguintes entregáveis ​​devem ser fornecidos:

- Código-fonte disponível em um repositório público (por exemplo, GitHub);
- Um relatório curto (1 ou 2 páginas) que explique as escolhas de projeto e implementação feitas;
- O projeto deve ter, pelo menos, 5 commits no repositório.


</br>

<details>

<summary><strong>Documentação da API</strong></summary>

## Usuários

### Cria um usuário


```http
  POST /users
```

- Request Body

```
{
  "name": "username"
  "email": "email@email.com",
  "password": "123456"
}
```

- Response

```
{
  "token": "7mqaVRXJSp886CGr"
}
```

### Realiza login

```http
  POST /users/login
```

- Request Body

```
{
  "email": "email@email.com",
  "password": "123456"
}
```

- Response

```
{
  "token": "7mqaVRXJSp886CGr"
}
```

### Retorna todos os usuários - token

```http
  GET /users
```


### Retorna um usuário - token

```http
  GET /users/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário que você quer |

</br>

## Produtos

### Cria um produto - token

```http
  POST /products
```

- Request Body

```
{
  "name": "fake product",
  "price": 10
}
```

- Response

```
{
  "product": {
    "name": "fake product",
    "price": 10,
    "_id": "641504b35bf0e8494feaa037",
    "__v": 0
  }
}
```

### Retorna todos os produtos - token

```http
  GET /products
```

### Modifica um produto - token

```http
  PUT /products/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você quer |


- Request Body

```
{
  "name": "fake product",
  "price": 10
}
```

- Response

```
{
  "product": {
    "name": "fake product",
    "price": 10,
    "_id": "641504b35bf0e8494feaa037",
    "__v": 0
  }
}
```
</br>

### Vendas

### Cria uma venda - token

```http
  POST /sales
```

- Request Body

```
{
  "userId": "6413cb2fa2b064d083aa712b",
  "products": [{
  	"productId": "6413cb42a2b064d083aa712f",
  	"quantity": 1
  }],
  "delivery_address": "rua a",
  "delivery_number": "99 99999 9999",
  "payment": "debit"
}
```

- Response

```
{
  "sale": {
    "userId": "6415079d5bf0e8494feaa03e",
    "products": [
        {
            "productId": "6414ff97d27c45cd057ef6b8",
            "price": 20,
            "quantity": 1,
            "_id": "641507b95bf0e8494feaa047"
        }
    ],
    "total_price": 20,
    "delivery_address": "rua a",
    "delivery_number": "99 99999 9999",
    "payment": "debit",
    "status": "pending",
    "_id": "641507b95bf0e8494feaa046",
    "__v": 0
  }
}
```

### Retorna todas as vendas - token

```http
  GET /sales
```

### Retorna uma venda - token

```http
  GET /sales/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do sales que você quer |

### Modifica uma venda - token

```http
  PUT /sales/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do sales que você quer |


- Request Body

```
{
  "userId": "6413cb2fa2b064d083aa712b",
  "products": [{
  	"productId": "6413cb42a2b064d083aa712f",
  	"quantity": 1
  }],
  "delivery_address": "rua a",
  "delivery_number": "99 99999 9999",
  "payment": "debit"
}
```

- Response

```
{
  "sale": {
    "userId": "6415079d5bf0e8494feaa03e",
    "products": [
        {
            "productId": "6414ff97d27c45cd057ef6b8",
            "price": 20,
            "quantity": 1,
            "_id": "641507b95bf0e8494feaa047"
        }
    ],
    "total_price": 20,
    "delivery_address": "rua a",
    "delivery_number": "99 99999 9999",
    "payment": "debit",
    "status": "pending",
    "_id": "641507b95bf0e8494feaa046",
    "__v": 0
  }
}
```

### Muda o estado da venda para preparando - token

```http
  PATCH /sales/:id/prepare
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do sales que você quer |

### Muda o estado da venda para concluída - token

```http
  PATCH /sales/:id/conclude
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do sales que você quer |

### Deleta uma venda - token

```http
  DELETE /sales/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do sales que você quer |

</details>
