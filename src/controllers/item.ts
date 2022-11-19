import { Request, Response } from "express"
import * as itemModel from "../services/item"
import { handleHttp } from "../utils/error.handle"

const getItem = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const itemResponse = await itemModel.getItem(id)
    res.send(itemResponse)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM', e)
  }
}

const getItems = async (req: Request, res: Response) => {
  try{
    const itemResponse = await itemModel.getItems()
    res.send(itemResponse)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e)
  }
}

const updateItem = async ({params, body}: Request, res: Response) => {
  try{
    const { id } = params;
    const itemResponse = await itemModel.updateItem(id, body)
    res.send(itemResponse)
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM', e)
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  try{
    const itemResponse = await itemModel.insertItem(body)
    res.send(itemResponse)
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM', e)
  }
}

const deleteItem = async ({params}: Request, res: Response) => {
  try{
    const { id } = params;
    const itemResponse = await itemModel.deleteItem(id)
    const data = itemResponse ? itemResponse : 'NOT_FOUND'
    res.send(data)
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM', e)
  }
}

export {
  getItem,
  getItems,
  updateItem,
  postItem,
  deleteItem
}