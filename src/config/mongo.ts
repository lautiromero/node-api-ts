import "dotenv/config"
import { connect } from "mongoose"

const NODE_ENV = process.env.NODE_ENV

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;

  try{
    await connect(DB_URI)
  } catch (e) {
    console.log(e)
  }
}

export default dbConnect

