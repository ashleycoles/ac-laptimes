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
        return await collection.aggregate([
            {
                '$match' : query
            },
            {
                '$lookup': {
                    'from': 'cars',
                    'localField': 'cid',
                    'foreignField': '_id',
                    'as': 'car'
                }
            },
            {
                '$unwind': {
                    'path': '$car',
                    'preserveNullAndEmptyArrays': true
                }
            },
            {
                '$lookup': {
                    'from': 'tracks',
                    'localField': 'tid',
                    'foreignField': '_id',
                    'as': 'track'
                }
            },
            {
                '$unwind': {
                    'path': '$track',
                    'preserveNullAndEmptyArrays': true
                }
            },
            {
                '$lookup': {
                    'from': 'users',
                    'localField': 'uid',
                    'foreignField': '_id',
                    'as': 'user'
                }
            },
            {
                '$unwind': {
                    'path': '$user',
                    'preserveNullAndEmptyArrays': true
                }
            },
            {
                '$project':{
                    '_id' : true,
                    'car' : true,
                    'track': true,
                    'user': {
                        '_id': true,
                        'name': true,
                        'email': true
                    },
                    'time': true
                }
            }
        ]).toArray();
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
};


module.exports.addTime = addTime;
module.exports.findAllTimes = findAllTimes;
