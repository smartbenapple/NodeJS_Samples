var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v4 as uuid4 } from 'uuid';
import { sendData } from '../connect.js';
export function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const message = { id: uuid4(), role: 'user', cmd: 'getAll', destSrv: "UserSrv" }; // TODO: Change json message type
        console.log(`API:[user/model.getAll] message=${JSON.stringify(message)}`);
        sendData(message);
        return message;
    });
}
export function create(dataItem) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = { id: uuid4(), role: 'user', cmd: 'create', destSrv: "UserSrv", data: dataItem }; // TODO: Change json message type
        console.log(`API:[user/model.create] message=${JSON.stringify(message)}`);
        sendData(message);
        return message;
    });
}
//# sourceMappingURL=model.js.map