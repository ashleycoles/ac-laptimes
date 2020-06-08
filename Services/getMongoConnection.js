const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const getMongoConnection = async () => {
    return await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(err => { console.log(err); });
}

module.exports = getMongoConnection;