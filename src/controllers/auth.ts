import { Request, response, Response } from "express";
import { loginUsr, registerNewUsr } from "../services/auth"
import { handleHttp } from "../utils/error.handle"

export const registerCtrl = async ({body}: Request, res: Response) => {
  const newUser = await registerNewUsr(body)
  res.send(newUser)
}

export const loginCtrl = async (req: Request, res: Response) => {

  try {
    const user = await loginUsr(req.body)

    if (user === 'INCORRECT_PASSWORD') {
      res.status(403)
      res.send(user)
    } else {
      res.send(user)
    }
  } catch (e) {
    handleHttp(res, 'INCORRECT_LOGIN_DATA', e)
  }

}