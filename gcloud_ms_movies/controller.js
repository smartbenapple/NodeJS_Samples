var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import { getAll, create } from './models/model_dfs.js';
//import { getAll, create } from './models/model_mdb.js';
import { getAll, create } from './models/model_gfs.js';
import { sendData } from "./connect.js";
// { destSrv: "MovieSrv", data:{...} }
function createMessage(id, data) {
    return {
        id: id,
        destSrv: 'ApiSrv',
        data
    };
}
export function processAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Movies:[controller.processAction] Start = ');
        let body = request.body;
        switch (body.cmd) {
            case 'getAll':
                console.log("Movies:[controller:getAll] message=" + JSON.stringify(body.data));
                yield getAllAction(request, response);
                break;
            case 'create':
                console.log("Movies:[controller:Create] message=" + JSON.stringify(body.data));
                yield createAction(request, response);
                break;
            default:
                //console.error('Unknown command');
                //channel.nack(message);
                break;
        }
    });
}
function getAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movies = yield getAll();
            let body = request.body;
            let bodyStg = JSON.stringify(body);
            console.log("Movies:[controller:createAction] body=" + bodyStg);
            const message = createMessage(body.destSrv, movies);
            sendData(message); // Note: Not using response stream intentionally
            console.log("Movies:[controller:getAllAction] message=" + JSON.stringify(message));
            //response.json(movies);
        }
        catch (e) {
            response.status(500).json(e);
        }
    });
}
function createAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let body = request.body;
            let bodyStg = JSON.stringify(body);
            console.log("Movies:[controller:createAction] body=" + bodyStg);
            const newData = yield create(body.data);
            const message = createMessage(body.id, newData);
            sendData(message); // Note: Not using response stream intentionally
            console.log("Movies:[controller:createAction] message=" + JSON.stringify(message));
            //response.json(movie);
        }
        catch (e) {
            response.status(500).json(e);
        }
    });
}
//# sourceMappingURL=controller.js.map