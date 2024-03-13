var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { getAll } from './user/model.js';
import { registerId } from './connect.js';
const router = Router();
router.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = yield getAll();
        // not-in-book: changed to registerId
        registerId(id, (users) => {
            const user = users.find((u) => u.username === request.body.username && u.password === request.body.password);
            if (user) {
                const payload = Object.assign({}, user);
                delete payload.password;
                const token = jwt.sign(payload, 'secret');
                response.json({ token });
            }
            else {
                response.status(401).json('unauthorized');
            }
        });
    }
    catch (e) {
        response.status(401).json('unauthorized');
    }
}));
export { router };
