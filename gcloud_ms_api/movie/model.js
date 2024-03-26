var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v4 as uuid4 } from "uuid";
import { sendData } from "../connect.js";
const url = 'https://gcloud-ms-movies-axxh6chama-wl.a.run.app/movie'; // locally: http://localhost:8181/movie
export function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        // const { data } = await axios.get(url);
        // return data;
        const message = { id: uuid4(), role: 'user', cmd: 'getAll', destSrv: "MovieSrv" }; // TODO: Change json message type
        console.log(`API:[movie/model.getAll] message=${JSON.stringify(message)}`);
        sendData(message);
        return message;
    });
}
export function create(dataItem) {
    return __awaiter(this, void 0, void 0, function* () {
        //const { data } = await axios.post(url, movie);
        //return data;
        const message = { id: uuid4(), role: 'user', cmd: 'create', destSrv: "MovieSrv", data: dataItem }; // TODO: Change json message type
        console.log(`API:[movie/model.create] message=${JSON.stringify(message)}`);
        sendData(message);
        return message;
    });
}
//export function getAll() { return { id: uuid4(), role: 'user', cmd: 'getAll', destSrv:"MovieSrv" }; }
//export function create(data:any) {return { id: uuid4(), role: 'user', cmd: 'getAll', destSrv:"MovieSrv", data:{} };};
//# sourceMappingURL=model.js.map