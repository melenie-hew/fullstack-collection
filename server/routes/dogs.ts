import { Router } from "express"
import * as db from '../db/db'

const router = Router()

//GET 'api/v1/dogs'
router.get('/', async (req, res) => {
  try {
    const dogs = await db.getAllDogs()
    res.json(dogs)
  } catch (e) {
    res.sendStatus(500) //status 500 refers to database error
  }
})

//GET 'api/v1/dogs/:id'
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id) //if its a parameter in the url (which :/id is), it will be a string so we need to convert it to a number since in our database function, id is a number
  try {
    const dog = await db.getDogById(id) //this function will pass whichever id number as a parameter eg api/v1/dogs/1 or api/v1/dogs/2 etc 
    res.json(dog)
  } catch (e) {
    res.sendStatus(500) //status 500 refers to database error
  }
})

//POST 'api/v1/dogs'
//this router will sit at the root ('/') since it doesn't take any parameters 
router.post('/', async (req, res) => {
  const newDog = req.body
  try {
    await db.addDog(newDog)
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500) //status 500 refers to database error
  }

})

//DEL 'api/v1/dogs/:id'
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteDog(id)
    res.status(204).send()
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

export default router