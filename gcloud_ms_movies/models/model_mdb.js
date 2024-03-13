// MongoDB: https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb
// Install NodeJs Client: npm mongodb --save
// Results: MongoDB failed getting GetAll().  And to use with gcloud service requires top package; allows cloud-to-cloud connections.
import { MongoClient, ServerApiVersion } from "mongodb";

// Replace the placeholder with your Atlas connection string
// Format: mongodb+srv//user:pass@sample.host.27017/?maxPoolSize=20&w=majority
const uri = "mongodb+srv://smartbenmongodb:fR0oX9wNM2l@smartbencluster0.uzjpqzt.mongodb.net/?retryWrites=true&w=majority&appName=SmartBenCluster0"; // TODO: Set connection
const dbName = "mongoTestDb";
const collName = "Movies";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,
  {
    serverApi:
      {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
  }
);

async function connect()
{
  // Get a connection
  await client.connect();
  // ping to test connection
  await client.db(dbName).command({ ping: 1 }); // TODO: db-name?
  console.log("Ping Success.  You are connected to Mongodb.");

}

async function connectOff()
{
    // close connection
    await client.close();
  console.log("Disconnected from MongoDb.");
}

// MongoDB: How to findAll items.
// Failure - Did not return records?
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/retrieve/
export async function getAll()
{
  try
  {
    try
    {
      await connect();

      // Open database
      const db = client.db(dbName);
      const coll = db.collection(collName);

      // Find All
      // Failure - Did not return records?
      const filter = { title: "Troy" };
      const movies = await coll.find(filter, {});

      // Find All, but return first item in collection
      // Success
      //const options = {  projection: { _id: 0, title: 1 }, };
      //const movies = await coll.findOne({}, options);

      /*for (const models in movies)
      {
        console.log("Movie=" + models.toString());
      }*/

      return movies;
      //return { "fake set":"hello?" };
    }
    catch(e)
    {
      console.log("Error Occurred..." + e.toString());
    }
  }
  finally
  {
    connectOff();
  }
}

// MongoDB: How to create items.
// Success: No issues.
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/insert/
export async function create(movie)
{
  try
  {
    try
    {
      await connect();

      // Open database
      const db = client.db(dbName);
      const coll = db.collection(collName);

      // Create item
      const addMovie = { "title": movie.title, "year": movie.year };
      const result = await coll.insertOne(addMovie);
      console.log(`Movie ${result.insertedId} created successfully.`);
    }
    catch(e)
    {
      console.log("Error Occurred..." + e.toString());
    }
  }
  finally
  {
    connectOff();
  }
}