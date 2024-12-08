interface Props {
  name: string
  breed: string
  gender: string
  onDelete: () => void // Function to handle delete action
}


export default function Dog({name, breed, gender, onDelete}: Props){
  return (
    <li>
       <div>
         <p>{name}</p>
         <p>{breed}</p>
         <p>{gender}</p>
         <button onClick={onDelete}>Delete</button>
       </div>
     </li>
  ) 
}