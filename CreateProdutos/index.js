const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {

    const Produto = req.body;

    const {client: MongoClient, closeConnectionFn} = await createMongoClient();

    const Produtos = MongoClient.collection('produtos');
    const body = await Produtos.insert(Produto);

    closeConnectionFn();

    context.res = {
        status: 200,
        body,
    }
}