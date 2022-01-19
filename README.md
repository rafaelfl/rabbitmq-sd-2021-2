# Rabbit Pizza (módulo Submissão de Pedidos)

![Licença](https://img.shields.io/badge/license-MIT-brightgreen)

## Sobre

<p align="center">Pequeno projeto com caráter educacional desenvolvido para apresentar os conceitos de mensageria com o *middleware* RabbitMQ para a disciplina de Sistemas Distribuídos (2021.2) do curso de Engenharia da Computação - UFMA. </p>


## Tabela de conteúdos
=================

   * [Sobre](#sobre)
   * [Tabela de conteúdos](#tabela-de-conteúdos)
   * [Descrição do Projeto](#-descrição-do-projeto)
   * [Pré-requisitos](#prerequisitos)
   * [Instalação](#-instalação)
   * [Tecnologias](#-tecnologias)
   * [Autor](#-autor)

---

## 💻 Descrição do Projeto 

O projeto consiste em um *marketplace* simples de pedidos de pizzas que utiliza uma arquitetura distribuída baseada no uso do middleware de mensageria RabbitMQ, no qual há dois subsistemas principais: (a) o módulo de "Submissão de pedidos" e (b) o módulo da "Pizzaria".

O módulo de "Submissão" é responsável por gerar os pedidos e colocá-los em uma fila no *broker* RabbitMQ. Estes pedidos deverão ser atendidos por uma das pizzarias cadastradas no sistema (por meio do módulo "Pizzaria"), o qual é responsável por receber requisições de entrega de um dado sabor de pizza em um endereço.

Ao receber um pedido, o módulo "Pizzaria" então encaminha o pedido a um subsistema de notificações, que utiliza WebSockets para distribuir o alerta para todos os painéis de notificação (representados por uma página web).

Os módulos foram implementados e disponibilizados nos seguintes projetos:
- [Rabbit Pizza (módulo Pizzaria)](https://github.com/rafaelfl/rabbitmq-front-sd-2021-2)
- [Rabbit Pizza (módulo Submissão)](https://github.com/rafaelfl/rabbitmq-sd-2021-2)

A arquitetura do sistema do sistema, conforme descrito, pode ser vista na figura a seguir.

![Arquitetura Geral do Rabbit Pizza](resources/rabbit_pizza.png)

---

<a name="prerequisitos"></a>
## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado um *broker* RabbitMQ em algum endereço. Recomendo utilizar um *container* Docker, que pode ser instalado por meio do seguinte comando (considerando a última versão até o momento):

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
```

Para ver o sistema funcionando, é importante já ter instalado, configurado e executado o módulo Pizzaria, disponível no seguinte [link](https://github.com/rafaelfl/rabbitmq-front-sd-2021-2)

---

## 🚀 Instalação

Após executar o *broker* RabbitMQ, baixe e configure o módulo Pizzaria, você deve baixar e configurar este projeto no arquivo .env, definindo na variável `BROKER_ADDRESS` o endereço ip do seu broker RabbitMQ (padrão localhost).

```bash
# Clone este repositório
$ git clone https://github.com/rafaelfl/rabbitmq-sd-2021-2

# Acesse a pasta do projeto no terminal/cmd
$ cd rabbitmq-sd-2021-2

# Instale as dependências
$ yarn install

# Edite o arquivo .env com suas configurações

# Execute o módulo de submissão utilizando a seguinte sintaxe
$ yarn start "SABOR DA PIZZA" "ENDEREÇO DE ENTREGA"

# Se você já estiver rodando o módulo Pizzaria, basta acessar o endereço <http://localhost:8080>
# que você verá as notificações enviadas por meio deste projeto na página web. A cada execução
# deste projeto (e envio de um novo pedido) será mostrada uma nova notificação no painel da
# página web.
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [AMQP](https://github.com/amqp-node/amqplib)

---

## 🦸 Autor

<a href="https://github.com/rafaelfl/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/31193433?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Prof. Dr. Rafael Fernandes Lopes</b></sub></a>


Feito com 💜 por Rafael Fernandes Lopes

[![Twitter Badge](https://img.shields.io/badge/-@rafaelf_l-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/rafaelf_l)](https://twitter.com/rafaelf_l) [![Linkedin Badge](https://img.shields.io/badge/-Rafael%20Fernandes%20Lopes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafael-fernandes-lopes/)](https://www.linkedin.com/in/rafael-fernandes-lopes/)
