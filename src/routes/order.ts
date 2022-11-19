import { Router, Request, Response } from "express";
import { getOrders } from "../controllers/order";
import { checkJwt } from "../middleware/session";

const router = Router()

/**
 * Only acceded by authorized users
 */

router.get('/', checkJwt, getOrders)

export {router}