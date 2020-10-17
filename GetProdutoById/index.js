const {ObjectID} = require('mongodb');

const createMongoCliente = require('../shared/mongoClient');

module.exports = async function (context, req) {
        const {id} = req.params;
        const {client: MongoClient, closeConnectionFn} = await createMongoCliente();

        const Produtos = MongoClient.collection('produtos');
        const body = await Produtos.findOne({_id: ObjectID(id)});
    
        closeConnectionFn();

        context.res = {
            status: 200,
            body
        };
};