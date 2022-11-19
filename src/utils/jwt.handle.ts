import { sign, verify } from "jsonwebtoken"
import "dotenv/config"

const JWT_SECRET = process.env.JWT_SECRET || 'token_secret.0p00p11'

export const generateToken = (id: string) => {
  const jwt = sign({id}, JWT_SECRET, {
    expiresIn: '12h'
  })
  console.log(jwt)
   return jwt
}

export const verifyToken = (jwt: string) => {
  return verify(jwt, JWT_SECRET)
}