import { Router } from "express"
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

/**
 * @returns index.ts => index
 */

const cleanFileName = (fileName: string) => {
  return fileName.split('.').shift()
}

// function that read the routes's dir and import(and use) the router of each file
readdirSync(PATH_ROUTER).map(fileName => {
  const cleanName = cleanFileName(fileName)

  if (cleanName !== 'index') {
    // import the file with the routes and use its router
    import(`./${cleanName}`).then( module => {
      router.use(`/${cleanName}`, module.router)
    })
    console.log(`Loaded route: ${cleanName}`)
  }
})

export { router }

