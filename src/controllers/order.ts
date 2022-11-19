import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { getOrdersService } from "../services/order"
import { handleHttp } from "../utils/error.handle"

interface SessionRequest extends Request {
  user?: string | JwtPayload
}

export const getOrders = (req: SessionRequest, res: Response) => {
  try{
    const data = getOrdersService()
    res.send({
      data,
      user: req.user
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e)
  }
}
