import { Router } from 'express';
import { getAllAction, createAction } from './controller.js';
const router = Router();
// @ts-ignore
router.get('/', getAllAction);
// @ts-ignore
router.post('/', createAction);
export { router };
