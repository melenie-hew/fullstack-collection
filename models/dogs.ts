export interface DogModel {
  id: number
  name: string
  breed: string
  gender: string
}

export interface DogModelNoId { //or this could be export interface DogModelData extends DogModel and just have id in it 
  name: string
  breed: string
  gender: string
}

