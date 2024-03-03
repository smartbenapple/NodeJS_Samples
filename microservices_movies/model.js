import mysql from 'mysql2/promise';

async function connect()
{
    const connection = await mysql.createConnection(
        {
            host: '192.168.1.7', // mysql
            user: 'root',
            password: 'topSecret',
            database: 'Movies',
        });

    connection.connect();

    return connection;
}

export async function getAll()
{
    const connection = await connect();

    const query = 'SELECT * FROM Movies';
    const [data]  = await connection.query(query);

    connection.end();

    return data;
}

export async function create(movie)
{
    const connection = await connect();

    const query = 'INSERT INTO Movies (title, year) VALUES (?,?)';
    const [result] = await connection.query(query, [movie.title, movie.year]);

    connection.end();

    return { ...movie, id: result.insertId };
}