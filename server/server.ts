import * as Path from 'node:path'

import express from 'express'
// import * as db from './db/db'

import dogs from './routes/dogs.ts'

const server = express()
server.use(express.json())

server.use('/api/v1/dogs', dogs)

//this is a way to test our functions before we build anything out 
// this way we can build out an API, create our routes and run these functions within those routes 
//and then when we run our server, those API endpoints will be accessible for us to use and appear on the client side 


// const dogs = await db.getAllDogs()
// const dogById = await db.getDogById(2)
// const deleteDog = db.deleteDog(3)
// console.log(deleteDog)

// ADD YOUR API ROUTES HERE




if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
