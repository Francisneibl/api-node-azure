const CreatMongoClient = require('../shared/mongoClient');
const {ObjectID} = require("mongodb");

module.exports = async function (context, req) {
    const {id} = req.params;

    const {client: MongoCleint, closeConnectionFn} =  await CreatMongoClient();

    const Produtos = MongoCleint.collection('produtos');
    const body = await Produtos.findOneAndDelete({_id: ObjectID(id)});

    closeConnectionFn();

    context.res = {
        status: 200,
        body
    };
}