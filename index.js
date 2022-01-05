/*
 * Simulação de um sistema administrativo que submete pedidos para as pizzarias
 * utilizando filas do RabbitMQ.
 */

// documentação disponível em: https://amqp-node.github.io/amqplib/
const amqp = require('amqplib/callback_api');
require('dotenv').config();

const BROKER_ADDRESS = process.env.BROKER_ADDRESS || 'localhost';

const saborDaPizza = process.argv[2] || "Calabresa";
const enderecoDeEntrega = process.argv[3] || "Rua dos Bobos, 0";

amqp.connect(`amqp://${BROKER_ADDRESS}`, (err0, conn) => {
    if (err0) {
        throw err0;
    }

    conn.createChannel((err1, ch) => {
        if (err1) {
            throw err1;
        }

        const queue = "pedidos";

        const pedido = {
            sabor: saborDaPizza,
            endereco: enderecoDeEntrega
        };

        ch.assertQueue(queue, { durable: true });

        ch.sendToQueue(queue, Buffer.from(JSON.stringify(pedido)) );
        console.log("Mensagem enviada com sucesso!");

        setTimeout(() => process.exit(), 1000);
    });
});