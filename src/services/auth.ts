import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

export const registerNewUsr = async ({email, password, name, description}: User) => {
  const checkIfexist = await UserModel.findOne({email})
  if (checkIfexist) return 'USER_ALREADY_EXIST'

  const passHash = await encrypt(password)
  const usrResponse = await UserModel.create({email, password: passHash, name, description})

  return usrResponse
}

export const loginUsr = async ({email, password}: Auth) => {
  const user = await UserModel.findOne({email})
  if (!user) return 'USER_NOT_FOUND'

  const passMatch = await verified(password, user.password)

  if(!passMatch) return 'INCORRECT_PASSWORD'

  const token = generateToken(String(user._id))

  return {
    token,
    user
  }
}