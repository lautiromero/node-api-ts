import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw: unknown) => {
  res.status(500)
  console.log('Error => ',error)
  errorRaw ? res.send({error, errorRaw}) : res.send({error})
}

export { handleHttp }