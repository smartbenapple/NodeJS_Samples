var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { create, getAll } from './model.js';
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
        console.log('UsersFb:[controller.processAction] Start');
        let body = request.body;
        switch (body.cmd) {
            case 'getAll':
                console.log("[controller:getAll] message=" + body.data);
                yield getAllAction(request, response);
                break;
            case 'create':
                console.log("[controller:Create] message=" + body.data);
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
        console.log('UsersFb:[controller.getAllAction] Start');
        const users = yield getAll();
        let body = request.body;
        const message = createMessage(body.id, users);
        console.log('UsersFb:[controller.getAllAction] message sent=' + JSON.stringify(message));
        sendData(message); // Send results back to innerconnect
        response.json({ "message": "success" });
    });
}
function createAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('UsersFb:[controller.createAction] Start');
        let body = request.body;
        const newData = yield create(body.data);
        // Note: Intentionally not returning the newData - not required.
        response.json({ "message": "success" });
    });
}
