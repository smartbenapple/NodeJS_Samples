var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { register } from '../connect.js';
import { getAll, create } from './model.js';
export function getAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const message = yield getAll();
            register(message, response); // Save browser original response object.
            //response.json(movies);
        }
        catch (e) {
            response.status(500).json(e);
            console.log("API:[controller.getAllAction] Error.");
        }
    });
}
export function createAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const message = yield create(request.body);
            register(message, response); // Save browser original response object.
            //response.json(newMovie);
        }
        catch (e) {
            response.status(500).json(e);
            console.log("API:[controller.createAction] Error.");
        }
    });
}
