const createMongoClient = require('../shared/mongoClient');
const {ObjectID} = require('mongodb');

module.exports = async function (context, req) {

    const {id} = req.params;
    const produto = req.body;

    const {client: MongoClient, closeConnectionFn} = await createMongoClient();
    const Produtos = MongoClient.collection('produtos');
    const body = Produtos.findOneAndUpdate(
        {_id: ObjectID(id)},
        {$set: produto}
    );

    closeConnectionFn();

    context.res = {
        status: 200,
        body
    };
    
}