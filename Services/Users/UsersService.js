const getMongoConnection = require('../getMongoConnection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const addUser = async (user) => {
    const client = await getMongoConnection();

    if (!client) {
        return;
    }

    try {
        let db = client.db("times");
        let collection = db.collection('users');

        user.password = await bcrypt.hash(user.password, saltRounds);

        let res = await collection.insertOne(user);
        return res.insertedId;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
};

module.exports.addUser = addUser;