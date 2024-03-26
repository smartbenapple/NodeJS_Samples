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
            const message = yield getAll(); // not-in-book: const message =
            register(message, response); // Save browser original response object.
            //response.json(userData);
        }
        catch (e) {
            console.error(e);
            response.status(500).json('Internal Server Error');
        }
    });
}
export function createAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const message = yield create(request.body); // not-in-book: const message =
            register(message, response); // Save browser original response object.
            //response.js(newUser);
        }
        catch (e) {
            console.error(e);
            response.status(500).json('Internal Server Error');
        }
    });
}
//# sourceMappingURL=controller.js.map