import { Request, Response, NextFunction } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { verifyToken } from '../utils/jwt.handle'

interface SessionRequest extends Request {
  user?: string | JwtPayload
}

export const checkJwt = (req: SessionRequest, res: Response, next: NextFunction) => {

  try {
    const jwtRaw = req.headers.authorization || ''
    // split 'Bearer 11111' and take the token
    const jwt = jwtRaw.split(' ').pop()
    // pass token in string format because can be empty
    const verified = verifyToken(`${jwt}`)

    if(!verified) {
      res.status(401)
      res.send('UNAUTHORIZED')
    } else {
      req.user = verified;
      next()
    }
  } catch (e) {
    res.status(400)
    res.send('INVALID_TOKEN')
  }
}