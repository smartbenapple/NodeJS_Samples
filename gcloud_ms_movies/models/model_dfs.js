import mysql from 'mysql2/promise';

// Google Firestore{DataStore} version
import { PropertyFilter } from "@google-cloud/datastore";
import { Datastore } from "@google-cloud/datastore";

// create instance of connection
const projectId = 'dauntless-bay-416001';
const datastore = new Datastore({ projectId });

async function connect()
{
    /*const connection = await mysql.createConnection(
        {
            host: '192.168.1.7', // mysql
            user: 'root',
            password: 'topSecret',
            database: 'Movies',
        });

    connection.connect();

    return connection;*/
}

export async function getAll_mysql()
{
    const connection = await connect();

   const query = 'SELECT * FROM Movies';
   const [data]  = await connection.query(query);

   connection.end();

    return data;
    //return [ { title:"iron man", year:"2011" }, { title:"iron man 2", year:"2018" } ];
}

export async function getAll()
{
    // Success: Test Datastore get records
    const query = datastore.createQuery('Movie');
      //.filter(and([new PropertyFilter('title','=','iron man')]));
    const [movies] = await datastore.runQuery(query);

    /*for (const models in movies)
    {
        console.log("Movie=" + models.toString());
    }*/

    return movies;
}

export async function create_mysql(movie)
{
    const connection = await connect();

    const query = 'INSERT INTO Movies (title, year) VALUES (?,?)';
    const [result] = await connection.query(query, [movie.title, movie.year]);

    connection.end();

    return { ...movie, id: result.insertId };
}

// Partial Success: Records were created; but, values did not apply correctly.
// - 1st Attempt: Did move values over into record using different new column names.
// - N Attempts: Did not allow any changes to apply correctly thereafter?
export async function create(movie)
{
    const key = datastore.key('Movie');
    const addMovie = {
        key: key,
        data: { "title": movie.title, "year": movie.year }
    }
    await datastore.save(addMovie);
    console.log(`Movie ${key.id} created successfully.`);
}