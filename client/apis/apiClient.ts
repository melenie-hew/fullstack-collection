import request from "superagent";
import { DogModel } from "../../models/dogs";

export async function fetchDog(): Promise<DogModel[]> { 
  const res = await request.get('/api/v1/dogs')
  return res.body
} 

export async function fetchDogById(id: number): Promise<DogModel> { 
  const res = await request.get(`/api/v1/dogs/${id}`)
  return res.body
} 

export async function addNewDog(newDog: DogModel) {
  await request.post('/api/v1/dogs').send(newDog)
}