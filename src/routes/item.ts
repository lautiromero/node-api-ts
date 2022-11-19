import { Router, Request, Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router()

router.get('/:id', getItem)
router.get('/', logMiddleware, getItems)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export {router}