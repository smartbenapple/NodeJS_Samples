import axios from 'axios';
import {v4 as uuid4} from "uuid";
import {sendData} from "../connect_org.js";

const url = 'https://gcloud-ms-movies-axxh6chama-wl.a.run.app/movie'; // locally: http://localhost:8181/movie

export async function getAll()
{
   // const { data } = await axios.get(url);
   // return data;

    const message = { id: uuid4(), role: 'user', cmd: 'getAll', destSrv:"MovieSrv" }; // TODO: Change json message type

    sendData(message);

    return message;
}

export async function create(data)
{
    //const { data } = await axios.post(url, movie);
    //return data;

    const message = { id: uuid4(), role: 'user', cmd: 'create', destSrv:"MovieSrv", data }; // TODO: Change json message type

    sendData(message);

    return message;
}