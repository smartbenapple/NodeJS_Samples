//import { MongoClient } from 'mongodb'; // TODO: Set into Firestore

//const url = 'mongodb://mongodb:27017'; // mongodb://mongodb:27017 or mongodb://192.168.1.7:27017
//const dbName = 'users';

var tempArray = [];

/*async function connect()
{
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const usersCollection = db.collection('users');
    return {
        client,
        usersCollection
    };
}*/

export async function getAll()
{
    //const { client, usersCollection } = await connect();
    //const data = await usersCollection.find().toArray();
    //client.close();
    return tempArray;
}

export async function create(user)
{
    //const { client, usersCollection } = await connect();
    //await usersCollection.insertOne(user);
    //client.close();
    tempArray.push(user);
    return user;
}
