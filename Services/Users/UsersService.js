const getMongoConnection = require('../getMongoConnection');


const addUser = async (user) => {
    const client = await getMongoConnection();

    if (!client) {
        return;
    }

    try {
        let db = client.db("times");
        let collection = db.collection('users');
        let res = await collection.insertOne(user);
        return res.insertedId;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
};

const loginUser = async(user) => {
    const client = await getMongoConnection();

    if (!client) {
        return;
    }

    try {
        let db = client.db("times");
        let collection = db.collection('users');
        return await collection.findOne({email: user.email});
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
};

module.exports.addUser = addUser;
module.exports.loginUser = loginUser;