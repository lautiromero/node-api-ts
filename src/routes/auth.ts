import { Router, Request, Response } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";

const router = Router()

/** 
 * http://localhost:3001/auth/register [POST] 
 * */

router.post('/register', registerCtrl)
router.post('/login', loginCtrl)

export {router}