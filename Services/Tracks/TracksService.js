const getMongoConnection = require('../getMongoConnection');


const addTrack = async (track) => {
    const client = await getMongoConnection();

    if (!client) {
        return;
    }

    try {
        let db = client.db("times");
        let collection = db.collection('tracks');

        let res = await collection.insertOne(track);
        return res.insertedId;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
};

const getTracks = async () => {
    const client = await getMongoConnection();

    if (!client) {
        return;
    }

    try {
        let db = client.db("times");
        let collection = db.collection('tracks');
        return await collection.find({}).sort({name: 1}).toArray();
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
};

module.exports.addTrack = addTrack;
module.exports.getTracks = getTracks;