const getMongoConnection = require('../getMongoConnection');

const addCar = async (time) => {
    const client = await getMongoConnection();

    if (!client) {
        return;
    }

    try {
        const db = client.db("times");
        let collection = db.collection('cars');
        let res = await collection.insertOne(time);
        return res.insertedId;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}



module.exports.addCar = addCar;
