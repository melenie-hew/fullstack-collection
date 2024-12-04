import connection from "./connection";
import { Dog } from "../../models/dogs";

const db = connection

//we know what the shape of our data (Dog from models) is going to look like so we can tell this function will return an array of dogs
//this function gives us ALL our dogs
export async function getAllDogs(): Promise<Dog[]> {
  const dogs = await db('dogs')
  .select('*')
  return dogs
}

//this function gives a single dog (by their id)
//.where() allows us to access a single entity in our table
export async function getDogById(id: number): Promise<Dog> {
  const oneDog = await db('dogs')
  .where('dogs.id', id)
  .select() // when we have a function with a select, it returns an array, but since here we only want one dog, we can add on the .first() 
  .first()
  return oneDog
}

export async function deleteDog(id: number){
  await db('dogs').where({id}).del()
}

//this function adds a new dog
export async function addDog(newDog: Dog) {
  const {name, breed, gender} = newDog
  const addNewDog = {
    name,
    breed,
    gender,
  }
  return await db('dogs').insert(addNewDog)
}