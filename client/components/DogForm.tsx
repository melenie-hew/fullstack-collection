import { useMutation, useQueryClient } from "@tanstack/react-query"
import React, { useState } from "react"
import { addNewDog } from "../apis/apiClient"
import { DogModelNoId } from "../../models/dogs"

export default function DogForm(){

  const [newDog, setNewDog] = useState('') // we use useState here so we can see something happening when we change the form
  const [newBreed, setNewBreed] = useState('') 
  const [newGender, setNewGender] = useState('')
  const queryClient = useQueryClient()
  // const [submitDog, setSubmitDog] = useState('') // we also want to see the changes when we submit a new dog 
  const addMutation = useMutation({mutationFn: (dog: DogModelNoId) => addNewDog(dog),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['dogs']})
  })

  // the thing about useState is that its a function & a variable so when we are setting up our 
  //event handlers, we need a function so useState can be helpful for this and with useState we can also use to manipulate what the client side functionality looks like 
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDog(e.target.value) //this 'value' is the one in the <input> tag 
    
  }

  const handleBreedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBreed(e.target.value)
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewGender(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // prevent default means when we press the submit button. it does not automatically send the data as a query
    setNewDog('') // this makes the input box go back to an empty box after a dog is submitted - better for user experience not having to delete the previous input
    setNewBreed('')
    setNewGender('')

    addMutation.mutate({name: newDog, breed: newBreed, gender: newGender })
  }
  //the onChange function here specifically runs the event handler
  
  // if(addMutation.isSuccess){            //if we kept this line in our code, the submit button would go away once a dog was submitted because it chooses this return over the form return
  //   return <p>{newDog} submitted!</p>
  // }
  
  return (
    <>
    {/* <p>{newDog}</p> */} 
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Dog Name</label>
      <input onChange={handleChange} value={newDog}  id="name"></input> 
      <label htmlFor="breed">Breed</label>
      <input onChange={handleBreedChange} value={newBreed}  id="breed"></input> 
      <label htmlFor="gender">Gender</label>
      <input onChange={handleGenderChange} value={newGender}  id="gender"></input> 
      <button>Submit</button>
    </form>
    </>
  )
} 