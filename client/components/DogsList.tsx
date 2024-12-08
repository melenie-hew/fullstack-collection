// first we can make a simple component that lists a bunch of dogs 

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { DogModel } from "../../models/dogs"

import Dog from "./Dog"
import { deleteDog, fetchDog } from "../apis/apiClient"





export default function DogsList(){

  //using useQuery to connect everything up to our server side using our actual data from the database, instead of our hard-coded data
  const {data: dogs, isPending, isError} = useQuery({queryKey: ['dogs'], queryFn: () => fetchDog()})
  const queryClient = useQueryClient()
  const deleteMutation = useMutation({
    mutationFn: deleteDog,
    onSuccess: () => {
      // Invalidate the dogs query to refetch the list
      queryClient.invalidateQueries({ queryKey: ['dogs'] });
    }
  })

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id); // Call the mutation with the dog's ID
  }

  if(isError){
    return <p>Error...</p>
  }

  if (isPending){
    return <p>Loading...</p>
  }
  //if we don't want to touch our database yet, we can create a const dogs (dummy data to use whilst building our app)
  // so we can see that user experience is nice and clean before hooking it up to our database 

//   const dogs = [
    
//   {
//     name: 'Buzz1',
//     breed: 'daschund',
//     gender: 'male',
//   },
//   {
//     name: 'Buzz2',
//     breed: 'poodle',
//     gender: 'female',
//   },
//   {
//     name: 'Buzz3',
//     breed: 'daschund',
//     gender: 'male',
//   },

// ] as DogModel[]
  


return (
  <>
    {dogs.map((dog) => (
       <Dog key={dog.id} name={dog.name} breed={dog.breed} gender={dog.gender} onDelete={() => handleDelete(dog.id)} /> // this is the Dog function from components/Dog.tsx
    ))}
  </>
)

}
