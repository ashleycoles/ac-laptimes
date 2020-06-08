const getMongoConnection = require('../getMongoConnection');

const addTime = async (time) => {
    const client = await getMongoConnection();

    if (!client) {
        return;
    }

    try {
        const db = client.db("times");
        let collection = db.collection('times');
        let res = await collection.insertOne(time);
        return res.insertedId;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
};

const findAllTimes = async (query) => {
    const client = await getMongoConnection();

    if (!client) {
        return;
    }

    try {
        const db = client.db("times");
        let collection = db.collection('times');
        return await collection.find(query).toArray();
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
};


module.exports.addTime = addTime;
module.exports.findAllTimes = findAllTimes;
