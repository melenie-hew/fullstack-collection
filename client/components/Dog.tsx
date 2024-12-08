interface Props {
  name: string
  breed: string
  gender: string
}


export default function Dog({name, breed, gender}: Props){
  return (
    <li>
       <div>
         <p>{name}</p>
         <p>{breed}</p>
         <p>{gender}</p>
       </div>
     </li>
  ) 
}