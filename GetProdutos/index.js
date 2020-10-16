const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    
    const {client: MongoClient, closeConectionFn } = await  createMongoClient();

    const Produtos = MongoClient.collection('contatos');
    const res = await Produtos.find({});
    const body = await res.toArray();

    //closeConectionFn();

    context.res = {
        status: 200,
        body,
    };
}