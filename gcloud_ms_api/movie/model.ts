import axios from 'axios';
import {v4 as uuid4} from "uuid";
import {sendData} from "../connect.js";

const url = 'https://gcloud-ms-movies-axxh6chama-wl.a.run.app/movie'; // locally: http://localhost:8181/movie

export async function getAll()
{
    // const { data } = await axios.get(url);
    // return data;

    const message = { id: uuid4(), role: 'user', cmd: 'getAll', destSrv:"MovieSrv" }; // TODO: Change json message type
    console.log(`API:[movie/model.getAll] message=${JSON.stringify(message)}`);
    sendData(message);

    return message;
}

export async function create(dataItem: any)
{
    //const { data } = await axios.post(url, movie);
    //return data;

    const message = { id: uuid4(), role: 'user', cmd: 'create', destSrv:"MovieSrv", data: dataItem }; // TODO: Change json message type
    console.log(`API:[movie/model.create] message=${JSON.stringify(message)}`);
    sendData(message);

    return message;
}

//export function getAll() { return { id: uuid4(), role: 'user', cmd: 'getAll', destSrv:"MovieSrv" }; }
//export function create(data:any) {return { id: uuid4(), role: 'user', cmd: 'getAll', destSrv:"MovieSrv", data:{} };};